import { apiClient } from "./config"

export const apiGetachievements = async () => {
    return apiClient.get("/achievemnts");
}

export const addAchievement = async (payload) => {
    return apiClient.post("/achievemnts", payload);
}

export const apiUpdateAchievement = async (id) => {
    return apiClient.patch(`/achievemnts/${id}`);
}

export const apiDelateAchievement = async (id) => {
    return apiClient.delete(`/achievemnts/${id}`);
}