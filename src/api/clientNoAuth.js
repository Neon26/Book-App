import {create} from 'apisauce';

const apiClient = (cancelToken) => create({
    baseURL: 'https://cae-bootstore.herokuapp.com',
    cancelToken
})

export default apiClient