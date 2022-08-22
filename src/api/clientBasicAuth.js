import {create} from "apisauce";
import base64 from "base-64";

const apiClient = (email, password, cancelToken) =>create({
    baseURL: 'https://cae-bootstore.herokuapp.com',
        headers:{
        Authorization:"Basic "+base64.encode(email+":"+password)
    },
    cancelToken
})

export default apiClient