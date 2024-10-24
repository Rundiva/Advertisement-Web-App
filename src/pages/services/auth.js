import { apiClient } from "./config"

export const apiSignup = async (payload) => {
    return await apiClient.post("/users/register", payload);
};
export const apiProfile = async () => {
    return await apiClient.get("/users/me");
};

export const apiLogin = async (payload) =>{
   return await apiClient.post("/users/login", payload);
};

export const apiDelete = async (adId) => apiClient.delete (`advert/${adId}`) ;

export const Get = async (adId) => apiClient.delete (`advert/${adId}`) ;




// export const apiEdit = async (payload) => {
    
// }