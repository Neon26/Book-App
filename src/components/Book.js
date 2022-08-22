import React, { useContext} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import useBooks from '../hooks/useBooks';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CircularProgress } from '@mui/material';
import Error from './Error';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import { AppContext } from '../context/AppContext';
import Button from './Button';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';




 const Book = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


   
      
export default function MyBook() {
  // an instance of a book
const book = {
    author: 'J.K. Rowling',
    created_on: 'Mon, 01 Jan 1970 00:00:00 GMT',
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg',
    pages: 299, 
    summary: 'The novels chronicle the lives of a young wizard, Harry Potter, and his friends.',
    title: 'Harry Potter and the Philosopher\'s Stone',
    category: 'Fiction',
}
    
    const {bookId} = useParams();
    const {setAlert, addToReadingList, removeFromReadingList, readingList } = useContext(AppContext)  
    const { error} = useBooks(bookId);
    const navigate = useNavigate();

    

    const handleAddToReadingList = () => {
        addToReadingList(book);
        setAlert({message: `${book.title} added to reading list`, severity: 'success'})
    }

    const handleRemoveFromReadingList = () => {
        removeFromReadingList(book);
        setAlert({message: `${book.title} removed from reading list`, severity: 'success'})
    }

    

    if (!book) {
        return (
            <Box sx={{ display:"flex"}}>
                <CircularProgress/>
            </Box>
        )
    }
    if (error){
        return(
            <Box sx={{ display:"flex"}}>
                <Error>{error}</Error>
            </Box>
        )
    }

    return (
      <>
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Box sx={{ flexGrow: 1 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                  {book.title[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings"  >
                  {readingList.find((readingListBook) => readingListBook.id === book.id) ? (
                    <RemoveCircleIcon onClick={handleRemoveFromReadingList}/>
                  ) : (
                    <AddCircleIcon  onClick={handleAddToReadingList}/>
                  )}
                </IconButton>
              }
              title={book.title}
              subheader={book.author}
            />
            <Book>
              <img src={book.img} alt={book.title} />
            </Book>
            <Typography variant="body2" color="text.secondary">
              {book.summary}
            </Typography>
          </Card>
        </Box>
      
        
        <Grid container spacing={1} sx={{m:1, pr:2, border:'1px solid', borderRadius:1}}>
        <Grid book sm={12} xs={12}  md={12}>
          <Book sx={{display:"flex", justifyContent: 'center'}}>
             <Avatar src={book.img} alt={book.title} sx={{height:'30%', width:'30%'}} variant="rounded"/>
          </Book>
        </Grid>
        <Grid book sm={12} xs={12}  md={12}>
          <Book sx={{height:'100%', alignContent: 'center'}}>
              <Typography variant="subtitle1"><strong>Book Title:</strong></Typography>
              <Typography variant="body1">{book.title}</Typography>
          </Book>
        </Grid>        
        <Grid book sm={6} xs={6} md={6}>
          <Book sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Book ID:</strong></Typography>
            <Typography variant="body1">{book.id}</Typography>
          </Book>
        </Grid>
        <Grid book sm={6} xs={6} md={6}>
          <Book sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Book Pages:</strong></Typography>
            <Typography variant="body1">{book.pages}</Typography>
          </Book>
        </Grid>
        <Grid book sm={12} xs={12}  md={12}>
        <Book sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Summary:</strong></Typography>
            <Typography variant="body1">{book.summary}</Typography>
          </Book>
        </Grid>
        <Grid book sm={12} xs={12}  md={12}>
        <Book sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Category:</strong></Typography>
            <Typography variant="body1">{book.category}</Typography>
          </Book>
        </Grid>

      </Grid>
      </>

  );
}