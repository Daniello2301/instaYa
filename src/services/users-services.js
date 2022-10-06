import { axiosConfig } from "../helpers/axios-config"; 

export async function signup(user){

    try {
        const response = await axiosConfig.post(`/user` , user);
        return response.data;
    } catch (error) {
        console.log(error);
    }

}