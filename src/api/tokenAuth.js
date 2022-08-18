import { apiTokenAuth } from "./client.js"

const endpoint_user = '/user'

export const editUser = async (token, userEdit, cancelToken) =>{
    let error;
    
    const response = await apiTokenAuth(token, cancelToken).put(endpoint_user, userEdit)
    if (!response.ok){
        error = "Unexpected Error, please go away"
    }
    return{
        error
    }

}

export const delUser = async (token, cancelToken) =>{
    let error;

    const response = await apiTokenAuth(token, cancelToken).delete(endpoint_user)
    if(!response.ok){
        error = 'Unexpected Error occured User not deleted'
    }
    return error
}