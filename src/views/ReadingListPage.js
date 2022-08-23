import React from 'react'
import ReadingList from '../components/ReadingList'
import { Typography, Box } from '@mui/material'


export default function ReadingListPage() {

  return (
    <>
    <Box sx={{maxWidth:"75%", mx:"auto"}}>
        <Typography variant="h4" component="h1" sx={{textAlign: "center", mt: 5}}>
            Your Reading List
        </Typography>
        <ReadingList/>
    </Box>
    </>
  )
}
