import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { userTrackingApi } from "@/Apis/UserTrackingApis";

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

interface UserTrackingContextType {
  userInfo: UserInfo[];
  totalVisitCount: number;
  isLoading: boolean;
}

const UserTrackingContext = createContext<UserTrackingContextType>({
  userInfo: [],
  totalVisitCount: 0,
  isLoading: true,
});

export const UserTrackingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);
  const [totalVisitCount, setTotalVisitCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getOrCreateUserId = (): string => {
    if (typeof window === "undefined") return ""; // SSR safeguard
    let userId = localStorage.getItem("user_tracking_id");
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem("user_tracking_id", userId);
    }
    return userId;
  };

  const getOperatingSystem = (): string => {
    const ua = navigator.userAgent;
    if (/Windows/.test(ua)) return "Windows";
    if (/Mac/.test(ua)) return "MacOS";
    if (/Linux/.test(ua)) return "Linux";
    if (/Android/.test(ua)) return "Android";
    if (/iOS/.test(ua)) return "iOS";
    return "Unknown OS";
  };

  const getUserSystemInfo = (): UserInfo => ({
    uniqueId: getOrCreateUserId(),
    visitedRoutes: [],
    ekvayuVisitCount: 0,
    os: getOperatingSystem(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    visitTimestamp: new Date().toISOString(),
  });

  const trackRouteVisit = async (pathname: string) => {
    const currentUser = userInfo.find(
      (user) => user.uniqueId === getOrCreateUserId()
    );
    if (!currentUser) return;

    const path =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5173/"
        : "https://ekvayu.com/";

    const isEkvayuRoute = pathname === "/" || pathname.startsWith(path);

    const updatedRoutes = currentUser.visitedRoutes.includes(pathname)
      ? currentUser.visitedRoutes
      : [...currentUser.visitedRoutes, pathname];

    const updatedEkvayuVisitCount = isEkvayuRoute
      ? currentUser.ekvayuVisitCount + 1
      : currentUser.ekvayuVisitCount;

    const updatedUser: UserInfo = {
      ...currentUser,
      visitedRoutes: updatedRoutes,
      ekvayuVisitCount: updatedEkvayuVisitCount,
    };

    try {
      await userTrackingApi.updateUserVisit(currentUser.uniqueId, updatedUser);
      setUserInfo((prevUsers) =>
        prevUsers.map((user) =>
          user.uniqueId === currentUser.uniqueId ? updatedUser : user
        )
      );
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
        setUserInfo([existingUserData.user]);
      } else {
        const systemInfo = getUserSystemInfo();
        await userTrackingApi.saveUserData(systemInfo);
        setUserInfo([systemInfo]);
      }

      setTotalVisitCount(totalVisits);
    } catch (error) {
      console.error("Failed to initialize user info:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initializeUserInfo();
  }, []);

  useEffect(() => {
    if (userInfo.length === 0) return;

    const handleRouteChange = () => {
      trackRouteVisit(window.location.pathname);
    };

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

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, [userInfo]);

  return (
    <UserTrackingContext.Provider
      value={{
        userInfo,
        totalVisitCount,
        isLoading,
      }}
    >
      {children}
    </UserTrackingContext.Provider>
  );
};

export const useUserTracking = () => useContext(UserTrackingContext);
