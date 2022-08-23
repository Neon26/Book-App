import * as React from 'react';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AppContext } from '../context/AppContext';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import Button from './Button'
import CardHeader from '@mui/material/CardHeader';


export default function ReadingList() {
  const theme = useTheme();
  const {readingList, removeFromReadingList, clearReadingList} = useContext(AppContext)
  return (
    <Box>
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', mb: 2}}>
        <Typography variant='h6' color='secondary'>
            Reading List
        </Typography>
        <Button onClick={()=>{clearReadingList()}}>Clear</Button>
    </Box>
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>    
        {readingList.map((book)=>(
               
      <Card key={book.id} sx={{ width: 345, mb: 3}}>
        <CardHeader
          subheader={book.title}
          fontSize='10'
          sx={{minHeight: 100, textAlign: 'center', color: 'black'}}

        />
        <CardMedia
          component="img"
          height='400'
          image={book.img}
          alt=" Cover PAGE"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Author: {book.author}<br/>
            Genre: {book.subject}<br/>
            Pages: {book.pages}
          </Typography>
        </CardContent> 
      </Card>
        ))}
        </Box>
        
    </Box>
  );
}