import { apiClient } from "./config"

export const apiGetProjects = async(payload)=>{
    return apiClient.get("/projects",payload)
}