import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import {useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { editUser } from '../api/clientTokenAuth'

export default function useEdit(userEdit, setUserEdit){
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            const source = CancelToken.source()
            if(userEdit.email && userEdit.password){
                const editUser = async()=>{
                    const response = await editUser(userEdit, user?.token, source.token)
                    console.log(response)
                    if(response.user){
                        setAlert({msg:'Your user was edited',cat:'success'})
                        navigate('/profile')
                    }if(!response?.error){
                        setAlert({msg:response.error,cat:'error'})
                        navigate('/')
                    }else{
                        console.log(response.error)
                    }
                }
                editUser()
            }
            return (()=>{source.cancel()})
        },
        [userEdit, user.token, setAlert, navigate]
    )
}

 