import React,  { useContext} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar  from '@mui/material/ImageListItemBar';
import IconButton  from '@mui/material/IconButton';
import AddShoppingCartTwoTone from '@mui/icons-material/AddShoppingCartTwoTone';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/system';
import Error from './Error';
import useBooks from '../hooks/useBooks';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';



export default function bookBrowser({}) {
  const {error, book} = useBooks()
  const {addToReadingList, setAlert} = useContext(AppContext)

  const navigate = useNavigate()

  const handleAddBook = (book) => {
    console.log("added", book.title, "to Library")
    addToReadingList(book)
    setAlert({msg:book.title + " added to cart", cat:"success"})

  }

  if (!error) {
    return(
      <Box sx={{display:"flex"}}>
        <CircularProgress/>
      </Box>
    )
  }
  if (error) {
    return(
      <Box sx={{display:"flex"}}>
        <Error>{error}</Error>
      </Box>
    )
  }
  

  return (
    <ImageList sx={{width:"100%", height:"100%"}} cols={3} rowHeight={300}>
      {book.map((book) => (
        <ImageListItem key={book.id}>
          <img src={book.image} alt={book.title} loading="lazy"/>
          <ImageListItemBar
            title={book.title}
            subtitle={<span>by: {book.author}</span>}
            actionIcon={<>
              <IconButton sx={{color:"white"}} aria-label={`info about ${book.title}`} onClick={()=>{navigate("/book/"+book.id)}}>
                <InfoIcon/>
              </IconButton>
              <IconButton sx={{color:"white"}} aria-label={`info about ${book.title}`} onClick={()=>handleAddBook(book)}>
                <AddShoppingCartTwoTone/>
              </IconButton>
              </>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>

  )
}
