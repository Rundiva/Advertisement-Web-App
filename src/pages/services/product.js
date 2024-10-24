import { apiClient } from "./config";

export const apiGetProducts = async() => 
apiClient.get("/adverts");


export const apiGetUserProducts = async () =>
    apiClient.get("/users/me/adverts");

export const apiAddProducts = async (payload) =>
    apiClient.post("/adverts", payload);

export const apiGetSingleProduct = async(id)=>{

    const adss = await apiClient.get(`/adverts/${id}`);
   
    return  adss
}
   
