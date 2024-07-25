import { apiClient } from "./config"

export const apiGetVoluteering = async()=>{
    return apiClient.get("/volunteering")
}

export const apiAddVoluteering = async(payload)=>{
    return apiClient.post("/volunteering",payload)
}

export const apiUpdateVoluteering = async(id)=>{
    return apiClient.patch(`/volunteering/${id}`)

}

export const apiDeleteVoluteering = async(id)=>{    
    return apiClient.delete(`/volunteering/${id}`)   
}