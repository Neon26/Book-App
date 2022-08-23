import React from 'react'
import {useParams} from 'react-router-dom'
import useGetBook from '../hooks/useGetBook'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import Error from './Error';


export default function SingleBook() {
    const {bookId} = useParams()
    console.log(bookId)
    const {book, error} = useGetBook(bookId)
    console.log(book)
    if (!book){
        return (
            <Box sx={{ display:"flex"}}>
                <CircularProgress/>
            </Box>
        )
      } 
       if (error){
           return (
               <Box sx={{ display:"flex"}}>
                   <Error>{error}</Error>
               </Box>
           )
       } 

    return (
    <Card sx={{ maxWidth: 345 ,display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Title: {book?.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Author: {book?.author}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Summary: {book?.summary}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Pages: {book?.pages}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Genre: {book?.subject}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={book.img}
        alt="Live from space album cover"
      />
    </Card>
        
    );
}

