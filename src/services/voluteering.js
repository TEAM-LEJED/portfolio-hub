import { apiClient } from "./config"

export const apiGetVoluteering = async()=>{
    return apiClient.get("/voluteering")
}

export const apiAddVoluteering = async(payload)=>{
    return apiClient.post("/voluteering",payload)
}

export const apiUpdateVoluteering = async(id)=>{
    return apiClient.patch(`/voluteering/${id}`)

}

export const apiDeleteVoluteering = async(id)=>{    
    return apiClient.delete(`/voluteering/${id}`)   
}