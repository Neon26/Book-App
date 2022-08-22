import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiBook from '../api/apiBook'
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

export default function useCreate(obj) {

    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            const apiCalls = async()=>{
                if(obj.title && obj.author && obj.genre && obj.description && obj.pages){
                    response = await apiBook.create(obj, user?.token, source.token)
                    console.log(response)
                if(response.book){
                        setAlert({msg:'Your book was created',cat:'success'})
                        navigate('/book/'+response.book.id)
                }if(!response?.error){
                    setAlert({msg:response.error,cat:'error'})
                    navigate('/')
                }
                }
            }
            if(obj){
                apiCalls()
            }
  return (()=>{source.cancel()})
        },[obj, user.token, setAlert, navigate]
  )
}
