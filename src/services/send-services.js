import { axiosConfig } from "../helpers/axios-config";

export async function getAllSends(configuration){
    try {
        const response = await axiosConfig.get('/send', configuration,
        {   withCredentials:true    }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }

}