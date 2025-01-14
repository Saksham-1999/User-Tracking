import { UserInfo } from "../Contexts/UserTrackingContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const userTrackingApi = {
  async saveUserData(userData: UserInfo) {
    const response = await fetch(`${API_BASE_URL}/user-tracking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  async getUserData(userId: string) {
    const response = await fetch(`${API_BASE_URL}/user-tracking/${userId}`);
    return response.json();
  },

  async updateUserVisit(userId: string, visitData: Partial<UserInfo>) {
    const response = await fetch(`${API_BASE_URL}/user-tracking/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visitData),
    });
    return response.json();
  },

  async getTotalVisits() {
    const response = await fetch(`${API_BASE_URL}/user-tracking/stats/total`);
    return response.json();
  },
};
