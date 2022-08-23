import {useEffect, useState} from 'react'
import { getBook } from '../api/clientNoAuth'
import { CancelToken } from 'apisauce'

export default function useBooks(id) {
    const [response, setResponse] = useState('')
    useEffect(() => {
        const source = CancelToken.source()
        const getBookData = async () => {
            const response = await getBook(id, source.token)
            setResponse(response)
        }
        getBookData()
        return () => {
            source.cancel()
        }
    }, [id])

    return response
}