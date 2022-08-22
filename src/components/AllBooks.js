import React, {useContext} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import useBooks from '../hooks/useBooks';
import CircularProgress from '@mui/material/CircularProgress';
import Error from './Error';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import AddShoppingCartTwoTone from '@mui/icons-material/AddShoppingCartTwoTone';

export default function AllBooks() {
  const { readingList, setReadingList } = useContext(AppContext);
  const { error, book } = useBooks();

  const navigate = useNavigate();

  const handleAddBook = (book) => {
    console.log("added", book.title, "to Library");
    setReadingList([...readingList, book]);
  };

  if (!error) {

    return(
      <Box sx={{display:"flex"}}>
        <Error>{error}</Error>
      </Box>
    )
  }
  if (error) {
    return(
      <Box sx={{display:"flex"}}>
        <CircularProgress/>
      </Box>
    )
  }





  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          All Books
        </Typography>
      </Box>
      <ImageList sx={{ width: '100%', height: '100%' }} cols={3} rowHeight={300}>
        {book.map((book) => (
          <ImageListItem key={book.id}>
            <img src={book.image} alt={book.title} loading="lazy" />
            <ImageListItemBar
              title={book.title}
              subtitle={<span>by: {book.author}</span>}
              actionIcon={
                <>
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`info about ${book.title}`}
                    onClick={() => {
                      navigate('/book/' + book.id);
                    }}
                  >
                    <InfoIcon />
                  </IconButton>
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`info about ${book.title}`}
                    onClick={() => handleAddBook(book)}
                  >
                    <AddShoppingCartTwoTone />
                  </IconButton>
                  </>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}
