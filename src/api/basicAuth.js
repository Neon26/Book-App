import { apiBasicAuth } from "./client.js"

const endpoint_login = '/login';
 
export const loginUser = async (email, password, cancelToken) =>{
    let error;
    let user;

    const response = await apiBasicAuth(email, password, cancelToken).get(endpoint_login);
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error = "Invalid username or password"
    }else{
        error = "An unexpected Error"
    }

    return {
        error,
        user
    }
}