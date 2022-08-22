import { apiNoAuth, apiTokenAuth } from "./client.js"

const enpoint ='/api/book'

const getBooks = async (cancelToken) =>{
    let error
    let books

    const response = await apiNoAuth(cancelToken).get(enpoint)
    if (response.ok){
        books = response.data
    }else if (response.status === 404){
        error= "Your Book was Not Found"
    }
    else{
        error = "An Unexpected Error Occurred.  Please Try Again Later"
    }
    return {
        error,
        books
    }

}

const getBook = async (id, cancelToken) =>{
    let error
    let book

    const response = await apiNoAuth(cancelToken).get(enpoint+'/'+id)
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



const post = async (token, data, cancelToken) =>{
  let error
  const response = await apiTokenAuth(token, cancelToken).post(enpoint, data)
  if (!response.status || response.status>500){
      error = "An Unexpected Error Occurred.  Please Try Again Later"  
  }
  else if (response.status && response.status<500 && response.status>299){
      error = "Please reauthorize your account"
  }
  return {
      error
  }
}

const put = async (token, id, data, cancelToken) =>{
  let error
  const response = await apiTokenAuth(token, cancelToken).put(enpoint+'/', data)
  if (!response.status || response.status>500){
      error = "An Unexpected Error Occurred.  Please Try Again Later"  
  }
  else if (response.status && response.status<500 && response.status>299){
      error = "Please reauthorize your account"
  }
  return {
      error
  }
}  

const del = async (token, id, cancelToken) =>{
  let error
  const response = await apiTokenAuth(token, cancelToken).delete(enpoint+'/'+id)
  if (!response.status || response.status>500){
      error = "An Unexpected Error Occurred.  Please Try Again Later"  
  }
  else if (response.status && response.status<500 && response.status>299){
      error = "Please reauthorize your account"
  }
  return {
      error
  }
}

const apiBook = {
    getBooks,
    getBook,
    post,
    put,
    del
}

export default apiBook