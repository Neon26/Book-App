import React, {useState} from 'react'
import { FormControl } from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material/Typography'
import BookForm from '../forms/BookForm'
import useBooks from '../hooks/useBooks'
import Error
 from './Error'

// an instance of a book
// const a_book = {
//     author: 'J.K. Rowling',
//     created_on: 'Mon, 01 Jan 1970 00:00:00 GMT',
//     id: 1,
//     img: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg',
//     pages: 1, 
//    'subject': 'Harry Potter',
//     sumarry: 'The novels chronicle the lives of a young wizard, Harry Potter, and his friends.',
//     title: 'Harry Potter and the Philosopher\'s Stone',
// }

export default function selectBook() {

    const [book, setBook] = useState('')
    const {books, error} = useBooks()
    const handleChange = (e) => {
        console.log(e.target.value)
        if(e.target.value === 'default') {
            console.log('No Item Selected')
            setBook('')
        } else {
            console.log('in else')
            setBook(books.find(book => book.id === e.target.value))
        }
    }

  return (
    <>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Book</InputLabel>
            <Select
                labelID = "book-label-id"
                id = "book-id"
                value = {book?.id ?? 'default'}
                label = "Book"
                onChange = {handleChange}
            >
                <MenuItem value = 'default'>
                    <em>None</em>
                </MenuItem>
                {books?.map(book => (
                    <MenuItem key = {book.id} value = {book.id}>
                        {book.title}
                    </MenuItem>
                ))}
            </Select>
            <Error>{error}</Error>
        </FormControl>
        {
            book?
            <>
                <Typography variant = 'h4' component = 'h2'>
                    Edit Book {book.title}
                </Typography>
                <BookForm book = {book}/>
            </>
            :
            <>
                <Typography variant = 'h4' component = 'h2'>
                    Add a New Book
                </Typography>
                <BookForm/>
            </>
            
        }

    </>
  )
}
