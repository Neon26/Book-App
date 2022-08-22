import React from 'react'
import Book from '../components/Book'
import { Box } from '@mui/material'




export default function book() {
  return (
    <>
    <Box sx={{maxWidth:"75%", mx:"auto"}}>
        <Book/>
    </Box>
    </>
  )
}
