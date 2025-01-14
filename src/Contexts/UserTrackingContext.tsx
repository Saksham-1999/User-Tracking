import { userTrackingApi } from "@/Apis/UserTrackingApis";
import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface UserTrackingContextType {
  userInfo: UserInfo | null;
  visitedRoutes: string[];
  ekvayuVisitCount: number;
  totalVisitCount: number;
}

export interface UserInfo {
  username?: string;
  email?: string;
  phone?: string;
  uniqueId: string;
  visitedRoutes: string[];
  ekvayuVisitCount: number;
  os: string;
  timezone: string;
  visitTimestamp: string;
}

export interface EkvayuData {
  totalEkvayuVisitCount: number;
  users: UserInfo[];
}

const UserTrackingContext = createContext<UserTrackingContextType>({
  userInfo: null,
  visitedRoutes: [],
  ekvayuVisitCount: 0,
  totalVisitCount: 0,
});

export const UserTrackingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [visitedRoutes, setVisitedRoutes] = useState<string[]>([]);
  const [ekvayuVisitCount, setEkvayuVisitCount] = useState<number>(0);
  const [totalVisitCount, setTotalVisitCount] = useState<number>(0);

  const EKVAYU_STORAGE_KEY = "ekvayu_data";

  const getOrCreateUserId = (): string => {
    let userId = localStorage.getItem("user_tracking_id");
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem("user_tracking_id", userId);
    }
    return userId;
  };

  const getOperatingSystem = (ua: string): string => {
    if (ua.indexOf("Win") !== -1) return "Windows";
    if (ua.indexOf("Mac") !== -1) return "MacOS";
    if (ua.indexOf("Linux") !== -1) return "Linux";
    if (ua.indexOf("Android") !== -1) return "Android";
    if (ua.indexOf("iOS") !== -1) return "iOS";
    return "Unknown OS";
  };

  const getUserSystemInfo = (): UserInfo => {
    const userAgent = window.navigator.userAgent;
    const os = getOperatingSystem(userAgent);

    return {
      username: "",
      email: "",
      phone: "",
      uniqueId: getOrCreateUserId(),
      visitedRoutes: [],
      ekvayuVisitCount: 0,
      os,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      visitTimestamp: new Date().toISOString(),
    };
  };

  const updateEkvayuStorage = async (updatedUserInfo: UserInfo) => {
    try {
      const ekvayuData: EkvayuData = JSON.parse(
        localStorage.getItem(EKVAYU_STORAGE_KEY) ||
          '{"totalEkvayuVisitCount":0,"users":[]}'
      );

      const userIndex = ekvayuData.users.findIndex(
        (user) => user.uniqueId === updatedUserInfo.uniqueId
      );

      if (userIndex !== -1) {
        ekvayuData.users[userIndex] = updatedUserInfo;
        await userTrackingApi.updateUserVisit(
          updatedUserInfo.uniqueId,
          updatedUserInfo
        );
      } else {
        ekvayuData.users.push(updatedUserInfo);
        ekvayuData.totalEkvayuVisitCount += 1;
        setTotalVisitCount(ekvayuData.totalEkvayuVisitCount);
        await userTrackingApi.saveUserData(updatedUserInfo);
      }

      localStorage.setItem(EKVAYU_STORAGE_KEY, JSON.stringify(ekvayuData));
    } catch (error) {
      console.error("Failed to update user tracking data:", error);
    }
  };

  const trackRouteVisit = (pathname: string) => {
    setVisitedRoutes((prevRoutes) => {
      const updatedRoutes = !prevRoutes.includes(pathname)
        ? [...prevRoutes, pathname]
        : prevRoutes;

      if (userInfo) {
        const isEkvayuRoute =
          pathname === "/" || pathname.startsWith("http://localhost:5173");

        const updatedUserInfo = {
          ...userInfo,
          visitedRoutes: updatedRoutes,
          ekvayuVisitCount: isEkvayuRoute
            ? userInfo.ekvayuVisitCount + 1
            : userInfo.ekvayuVisitCount,
        };

        setUserInfo(updatedUserInfo);
        updateEkvayuStorage(updatedUserInfo);

        if (isEkvayuRoute) {
          setEkvayuVisitCount(updatedUserInfo.ekvayuVisitCount);
        }
      }

      return updatedRoutes;
    });
  };

  useEffect(() => {
    const initializeUserTracking = async () => {
      const systemInfo = getUserSystemInfo();

      try {
        const existingUserData = await userTrackingApi.getUserData(
          systemInfo.uniqueId
        );
        const totalVisits = await userTrackingApi.getTotalVisits();

        const initializedUserInfo = existingUserData || {
          ...systemInfo,
          visitedRoutes: [],
          ekvayuVisitCount: 0,
        };

        setUserInfo(initializedUserInfo);
        setEkvayuVisitCount(initializedUserInfo.ekvayuVisitCount);
        setTotalVisitCount(totalVisits);

        if (!existingUserData) {
          await updateEkvayuStorage(initializedUserInfo);
        }
      } catch (error) {
        console.error("Failed to initialize user tracking:", error);
        const ekvayuData: EkvayuData = JSON.parse(
          localStorage.getItem(EKVAYU_STORAGE_KEY) ||
            '{"totalEkvayuVisitCount":0,"users":[]}'
        );

        const existingUser = ekvayuData.users.find(
          (user) => user.uniqueId === systemInfo.uniqueId
        );

        const initializedUserInfo = existingUser || {
          ...systemInfo,
          visitedRoutes: [],
          ekvayuVisitCount: 0,
        };

        setUserInfo(initializedUserInfo);
        setEkvayuVisitCount(initializedUserInfo.ekvayuVisitCount);
        updateEkvayuStorage(initializedUserInfo);
      }
    };

    initializeUserTracking();

    const handleRouteChange = () => {
      const currentPath = window.location.pathname;
      trackRouteVisit(currentPath);
    };

    window.addEventListener("popstate", handleRouteChange);

    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleRouteChange();
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handleRouteChange();
    };

    handleRouteChange();

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  return (
    <UserTrackingContext.Provider
      value={{ userInfo, visitedRoutes, ekvayuVisitCount, totalVisitCount }}
    >
      {children}
    </UserTrackingContext.Provider>
  );
};

export const useUserTracking = () => useContext(UserTrackingContext);
