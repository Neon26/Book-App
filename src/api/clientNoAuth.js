import { apiNoAuth } from "./client.js"

const endpoint_user = '/user'
const endpoint_book = '/book'

export const registerUser = async (userData, cancelToken) =>{
    let error;
    const response = await apiNoAuth(cancelToken).post(endpoint_user, userData)
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}

export const getBook = async (bookID, cancelToken) =>{
    let error
    let book

    const response = await apiNoAuth(cancelToken).get(endpoint_book+'/'+bookID)
    if (response.ok){
        book = response.data
    }else if (response.status === 404){
        error= "Your Book was Not Found"
    }
    else{
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error,
        book
    }

}

export const getAllBooks = async (cancelToken) =>{
    let error
    let books

    const response = await apiNoAuth(cancelToken).get(endpoint_book)
    if (response.ok){
        books = response.data
    }else if (response.status === 404){
        error= "Your Books were Not Found"
    }
    else{
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error,
        books
    }

}