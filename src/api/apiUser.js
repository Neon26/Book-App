import apiClientNoAuth from './clientNoAuth'
import apiClientTokenAuth from './clientTokenAuth'

const endpoint = '/user'

const postUser = async (userData, cancelToken) => {
    let error
    const response = await apiClientNoAuth(cancelToken).post(endpoint, userData)
    if (!response.ok) {
        error = 'An Unexpected Error Occurred.  Please Try Again Later'
    }
    return {
        error
    }
    }

const putUser = async (token, userEdit, cancelToken) => {
    let error
    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint, userEdit)
    if (!response.ok) {
        error = 'Unexpected Error, please go away'
    }
    return {
        error
    }
}

const delUser = async (token, cancelToken) => {
    let error
    const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint)
    if (!response.ok) {
        error = 'Unexpected Error occured User not deleted'
    }
    return error
}

const apiUser = {
    postUser,
    putUser,
    delUser
}

export default apiUser
