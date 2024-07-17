import { apiClient } from "./config"

export const apiGetEducation = async (payload)=>{
    return apiClient.get("/education",payload);
}