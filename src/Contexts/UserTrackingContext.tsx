import { userTrackingApi } from "@/Apis/UserTrackingApis";
import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface UserTrackingContextType {
  userInfo: UserInfo | null;
  visitedRoutes: string[];
  ekvayuVisitCount: number;
  totalVisitCount: number;
  isLoading: boolean;
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
  isLoading: true,
});

export const UserTrackingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [visitedRoutes, setVisitedRoutes] = useState<string[]>([]);
  const [ekvayuVisitCount, setEkvayuVisitCount] = useState<number>(0);
  const [totalVisitCount, setTotalVisitCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

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

  const trackRouteVisit = async (pathname: string, userInfo: UserInfo) => {
    // Add null check and default to empty array if undefined
    const currentVisitedRoutes = visitedRoutes || [];
    const isEkvayuRoute =
      pathname === "/" || pathname.startsWith("http://localhost:5173/");

    const updatedRoutes = currentVisitedRoutes.includes(pathname)
      ? currentVisitedRoutes
      : [...currentVisitedRoutes, pathname];

    const updatedUserInfo = {
      ...userInfo,
      visitedRoutes: updatedRoutes,
      ekvayuVisitCount: isEkvayuRoute
        ? userInfo.ekvayuVisitCount + 1
        : userInfo.ekvayuVisitCount,
    };

    try {
      await userTrackingApi.updateUserVisit(userInfo.uniqueId, updatedUserInfo);
      // console.log("Visit updated successfully", updatedUserInfo);
      setUserInfo(updatedUserInfo);
      setVisitedRoutes(updatedRoutes);
      if (isEkvayuRoute) {
        setEkvayuVisitCount(updatedUserInfo.ekvayuVisitCount);
      }
    } catch (error) {
      console.error("Failed to update visit:", error);
    }
  };

  const initializeUserInfo = async () => {
    setIsLoading(true);
    const uniqueId = getOrCreateUserId();

    if (!uniqueId) return;

    try {
      const existingUserData = await userTrackingApi.getUserData(uniqueId);
      const totalVisits = await userTrackingApi.getTotalVisits();

      if (existingUserData) {
        const userData = existingUserData.user;
        setUserInfo(userData);
        setVisitedRoutes(userData.visitedRoutes);
        setEkvayuVisitCount(userData.ekvayuVisitCount);
      } else {
        const systemInfo = getUserSystemInfo();
        await userTrackingApi.saveUserData(systemInfo);
        setUserInfo(systemInfo);
      }

      setTotalVisitCount(totalVisits);
    } catch (error) {
      console.error("Failed to initialize tracking:", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    initializeUserInfo();
  }, []);

  useEffect(() => {
    if (isLoading) return; // Wait until loading is complete

    if (!userInfo) {
      initializeUserInfo(); // Reinitialize if userInfo is null
      return;
    }

    const handleRouteChange = async () => {
      trackRouteVisit(window.location.pathname, userInfo);
    };

    window.addEventListener("popstate", handleRouteChange);
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleRouteChange();
    };

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
  }, [userInfo, isLoading]);

  return (
    <UserTrackingContext.Provider
      value={{
        userInfo,
        visitedRoutes,
        ekvayuVisitCount,
        totalVisitCount,
        isLoading,
      }}
    >
      {children}
    </UserTrackingContext.Provider>
  );
};

export const useUserTracking = () => useContext(UserTrackingContext);
