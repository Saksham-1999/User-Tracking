import { UserInfo } from "../Contexts/UserTrackingContext";

const API_BASE_URL = process.env.VITE_API_BASE_URL;

export const userTrackingApi = {
  async saveUserData(userData: UserInfo) {
    try {
      const response = await fetch(`${API_BASE_URL}/user-tracking/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to save user data");
      }

      return response.json();
    } catch (error) {
      console.error("Error saving user data:", error);
      throw error;
    }
  },

  async getUserData(userId: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/user-details/${userId}/`);

      if (!response.ok) {
        throw new Error("Failed to get user data");
      }

      return response.json();
    } catch (error) {
      console.error("Error getting user data:", error);
      throw error;
    }
  },

  async updateUserVisit(userId: string, visitData: Partial<UserInfo>) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/user-details/${userId}/update/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(visitData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update user data");
      }
      return response.json();
    } catch (error) {
      console.error("Error updating user visit:", error);
      throw error;
    }
  },

  async getTotalVisits() {
    try {
      const response = await fetch(`${API_BASE_URL}/total-visits/`);
      if (!response.ok) {
        throw new Error("Failed to get total visits");
      }
      return response.json();
    } catch (error) {
      console.error("Error getting total visits:", error);
      throw error;
    }
  },
};
