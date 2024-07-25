import { apiClient } from "./config"

export const apiGetachievements = async () => {
    return apiClient.get("/achievements");
}

export const addAchievement = async (payload) => {
    return apiClient.post("/achievements", payload);
}

export const apiUpdateAchievement = async (id) => {
    return apiClient.patch(`/achievements/${id}`);
}

export const apiDelateAchievement = async (id) => {
    return apiClient.delete(`/achievements/${id}`);
}