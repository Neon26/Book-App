import React, {useState} from 'react'
import * as yup from 'yup'
import { useFormik,  } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '../components/Button'
import { FormHelperText, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import useCreate from '../hooks/useCreate'
import useDelete from '../hooks/useDelete'
import useEdit   from '../hooks/useEdit'


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
const FormSchema = yup.object({
    id: yup.number().required('id is required'),
    title: yup.string().required('Title is required'),
    author: yup.string().required('Author is required'),
    img: yup.string().url().required('Image URL is required'),
    pages: yup.number().required('Number of pages is required'),
    subject: yup.string().required('Subject is required'),
    summary: yup.string().required('Summary is required'),
})



export default function BookForm({book}) {

  const [newBook, setNewBook] = useState()
  const [editBook, setEditBook] = useState()
  const [deleteBook, setDeleteBook] = useState()
  useCreate(newBook)
  useEdit(book?.id,editBook)
  useDelete(book?.id,deleteBook)

  const initialValues={
    id: book?.id || '',
    title: book?.title ?? '',
    author: book?.author ?? '',
    img: book?.img ?? '',
    pages: book?.pages ?? '',
    subject: book?.subject ?? '',
    summary: book?.summary ?? '',
  }

  const handleSubmit = (values, resetForm) => {
    if (book) {
      setEditBook(values)
      console.log('edit book', values)
    } else {
      setNewBook(values)
      console.log('new book', values)
    }
    resetForm(initialValues)
  }

  const handleDelete = () => {
    setDeleteBook()
    console.log('delete book', book.title)
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema:FormSchema,
    onSubmit: (values, {resetForm}) => handleSubmit(values, resetForm),
    enableReinitialize: true,
  })

  
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="id"
        name="id"
        label="ID"
        value={formik.values.id}
        onChange={formik.handleChange}
        error={formik.touched.id && Boolean(formik.errors.id)}
        helperText={formik.touched.id && formik.errors.id}
      />
      <TextField
        fullWidth
        id="title"
        name="title"
        label="Title"
        placeholder='Title'
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        fullWidth
        id="author"
        name="author"
        label="Author"
        placeholder='Author'
        value={formik.values.author}
        onChange={formik.handleChange}
        error={formik.touched.author && Boolean(formik.errors.author)}
        helperText={formik.touched.author && formik.errors.author}
      />
      <TextField
        fullWidth
        id="img"
        name="img"
        label="Image URL"
        placeholder='Image URL'
        value={formik.values.img}
        onChange={formik.handleChange}
        error={formik.touched.img && Boolean(formik.errors.img)}
        helperText={formik.touched.img && formik.errors.img}
      />
      <TextField
        fullWidth
        id="pages"
        name="pages"
        label="Number of pages"
        placeholder='Number of pages'
        value={formik.values.pages}
        onChange={formik.handleChange}
        error={formik.touched.pages && Boolean(formik.errors.pages)}
        helperText={formik.touched.pages && formik.errors.pages}
      />
      <FormControl fullWidth>
        <InputLabel id="subject">Subject</InputLabel>
        <Select
          labelId="subject"
          id="subject"
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
        >
          <MenuItem value={'Fiction'}>Fiction</MenuItem>
          <MenuItem value={'Non-Fiction'}>Non-Fiction</MenuItem>
          <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
          <MenuItem value={'Science Fiction'}>Science Fiction</MenuItem>
          <MenuItem value={'Mystery'}>Mystery</MenuItem>
          <MenuItem value={'Horror'}>Horror</MenuItem>
          <MenuItem value={'Romance'}>Romance</MenuItem>
          <MenuItem value={'Thriller'}>Thriller</MenuItem>
          <MenuItem value={'Biography'}>Biography</MenuItem>
          <MenuItem value={'History'}>History</MenuItem>
          <MenuItem value={'Self-Help'}>Self-Help</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
        <FormHelperText>{formik.touched.subject && formik.errors.subject}</FormHelperText>
      </FormControl>
      <TextField
        fullWidth
        id="summary"
        name="summary"
        label="Summary"
        placeholder='Summary'
        value={formik.values.summary}
        onChange={formik.handleChange}
        error={formik.touched.summary && Boolean(formik.errors.summary)}
        helperText={formik.touched.summary && formik.errors.summary}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        {book ? 'Edit' : 'Add'}
      </Button>
      {book && (
        <Button color="secondary" variant="contained" fullWidth onClick={handleDelete}>
          Delete
        </Button>
      )}
    </form>
    
  )
}


