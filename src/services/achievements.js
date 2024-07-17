import { apiClient } from "./config"

export const apiGetachievements = async () => {
    return apiClient.get("/achievemnts");
}
