import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface UserTrackingContextType {
  userInfo: UserInfo | null;
  visitedRoutes: string[];
  ekvayuVisitCount: number;
}

interface UserInfo {
  uniqueId: string;
  os: string;
  timezone: string;
  visitTimestamp: string;
}

const UserTrackingContext = createContext<UserTrackingContextType>({
  userInfo: null,
  visitedRoutes: [],
  ekvayuVisitCount: 0,
});

export const UserTrackingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [visitedRoutes, setVisitedRoutes] = useState<string[]>([]);
  const [ekvayuVisitCount, setEkvayuVisitCount] = useState<number>(0);

  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5173"
      : "https://ekvayu.com";

  const getUserSystemInfo = () => {
    const userAgent = window.navigator.userAgent;
    const os = getOperatingSystem(userAgent);

    return {
      uniqueId: getOrCreateUserId(),
      os,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      visitTimestamp: new Date().toISOString(),
    };
  };

  const getOperatingSystem = (ua: string): string => {
    if (ua.indexOf("Win") !== -1) return "Windows";
    if (ua.indexOf("Mac") !== -1) return "MacOS";
    if (ua.indexOf("Linux") !== -1) return "Linux";
    if (ua.indexOf("Android") !== -1) return "Android";
    if (ua.indexOf("iOS") !== -1) return "iOS";
    return "Unknown OS";
  };

  const getOrCreateUserId = (): string => {
    let userId = localStorage.getItem("user_tracking_id");
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem("user_tracking_id", userId);
    }
    return userId;
  };

  const postUserInfo = async (info: UserInfo) => {
    try {
      // const response = await fetch("YOUR_API_ENDPOINT/track-user", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(info),
      // });

      if (info) {
        localStorage.setItem("user_tracking_info", JSON.stringify(info));
      }
    } catch (error) {
      console.error("Error posting user tracking info:", error);
    }
  };

  const trackRouteVisit = (pathname: string) => {
    if (pathname === BASE_URL || pathname.startsWith(BASE_URL)) {
      setEkvayuVisitCount((prevCount) => {
        const updatedCount = prevCount + 1;
        localStorage.setItem("ekvayu_visit_count", String(updatedCount));
        return updatedCount;
      });
    }

    setVisitedRoutes((prevRoutes) => {
      if (!prevRoutes.includes(pathname)) {
        const updatedRoutes = [...prevRoutes, pathname];
        localStorage.setItem("visited_routes", JSON.stringify(updatedRoutes));
        return updatedRoutes;
      }
      return prevRoutes;
    });
  };

  useEffect(() => {
    const trackUser = async () => {
      const systemInfo = getUserSystemInfo();
      setUserInfo(systemInfo);
      await postUserInfo(systemInfo);
    };

    trackUser();

    const savedCount = localStorage.getItem("ekvayu_visit_count");
    if (savedCount) {
      setEkvayuVisitCount(Number(savedCount));
    }

    const savedRoutes = localStorage.getItem("visited_routes");
    if (savedRoutes) {
      setVisitedRoutes(JSON.parse(savedRoutes));
    }

    const handleRouteChange = () => {
      const currentPath = window.location.href;
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

    // Initial route tracking
    handleRouteChange();

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  return (
    <UserTrackingContext.Provider
      value={{ userInfo, visitedRoutes, ekvayuVisitCount }}
    >
      {children}
    </UserTrackingContext.Provider>
  );
};

export const useUserTracking = () => useContext(UserTrackingContext);
