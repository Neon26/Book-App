import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddRemoveBook from './AddRemoveBook';

export default function ReadingListCard(book) {
  return (
    <Card sx={{m:2, p:2, maxWidth:"300px", minWidth:"300px", mx:"auto"}}>
        <CardContent>
            <Typography variant="h5" component="div">
                {book.title}
            </Typography>
            <Typography variant="body2">
                {book.author}
            </Typography>
        </CardContent>
        <CardActions>
            <AddRemoveBook book={book}/>
        </CardActions>
    </Card>
  )
}
