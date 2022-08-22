import React, {useEffect, useState} from 'react'
import apiBook from '../api/apiBook'
import { CancelToken } from 'apisauce'

export default function useBooks(id) {
    const [response, setResponse] = useState('')
     

    useEffect(
        () => {
            const source = CancelToken.source()
            const getBooks = async () => {
                const r = await apiBook.getBook(id, source.token)
                setResponse(r)
            }
            id ? getBooks() : setResponse('')
            return () => {
                source.cancel()
            }
        },
        [id])
    return response 
}

            



 

