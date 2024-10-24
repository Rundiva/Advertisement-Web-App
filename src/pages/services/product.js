import { apiClient } from "./config";

export const apiGetProducts = async() => 
apiClient.get("/adverts");



export const apiAddProducts = async (payload) =>
    apiClient.post("/adverts", payload);

export const apiGetSingleProduct = async(id)=>
    apiClient.get(`/adverts/${id}`);
