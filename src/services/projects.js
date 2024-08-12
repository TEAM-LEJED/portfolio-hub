import { apiClient } from "./config"

export const apiGetProjects = async()=>{
    return apiClient.get("/projects")
}
export const apiAddProject =async(payload)=>{
    return apiClient.post("/projects",payload)
}

export const apiUdateProjects = async(id)=>{
    return apiClient.patch(`/projects/${id}`)
}
export const apiDeleteProject = async(id)=>{
    return apiClient.delete(`/projects/${id}`)
}