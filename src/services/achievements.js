import { apiClient } from "./config"

export const apiGetachievements = async (payload) => {
    return apiClient.get("/achievemnts",payload);
}
