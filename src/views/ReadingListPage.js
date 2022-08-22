import React, {useContext, useEffect} from 'react'
import ReadingListBook from '../components/ReadingList/ReadingListBook'
import { Typography, Box } from '@mui/material'
import { AppContext } from '../context/AppContext'
import {useParams} from 'react-router-dom'

export default function ReadingListPage() {
    const {readingList, setAlert} = useContext(AppContext)
    const{canceled} = useParams()

    useEffect(() => {
        if(canceled){
            setAlert({msg: "You have canceled your Book", cat: "error"})
        }
    }, [canceled, setAlert])

    if(readingList.length <= 0){
        return(
            <Typography variant="h4" component="h1" sx={{textAlign: "center", mt: 5}}>
                Your Reading List is Empty
            </Typography>
        )
    }


  return (
    <>
    <Box sx={{maxWidth:"75%", mx:"auto"}}>
        <Typography variant="h4" component="h1" sx={{textAlign: "center", mt: 5}}>
            Your Reading List
        </Typography>
        <ReadingListBook/>
    </Box>
    </>
  )
}
