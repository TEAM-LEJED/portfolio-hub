import { apiClient } from "./config";

export const apiGetExperiences = async()=>{
    return apiClient.get("/experiences");
}

export const apiAddExperience = async(payload)=>{
    return apiClient.post("/experiences",payload);
}

export const apiDeleteExperience = async(id)=>{
    return apiClient.delete(`/experiences/${id}`);
}

export const apiUpdateExperience = async(id)=>{
    return apiClient.patch(`/experiences/${id}`);
}