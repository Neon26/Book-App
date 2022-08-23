import React, {useEffect} from 'react'
import { registerUser } from '../api/clientNoAuth'
import { CancelToken } from 'apisauce'
import {useNavigate} from 'react-router-dom'
import Error from '../components/Error'

export default function useRegister(user, setUser, setError) {
    const navigate = useNavigate()

    useEffect(() => {
        const source = CancelToken.source()
        if(user.email && user.password){
            const register = async () => {
            const {error} = await registerUser(user, source.token)
            if(error){
                <Error error={error}/>
            }else{
                console.log(`User ${user.email} registered`)
                setUser({})
                navigate('/login')
            }
            setError(error)
        }
        register()
    }
        return () => {
            source.cancel()
        },
        [user, setUser, setError, navigate]
    })
}