import React, { useContext } from 'react'
import ReadingListBook from './ReadingListBook'
import Box from '@mui/material/Box';
import { AppContext } from '../../context/AppContext';


export default function Index() {
    const { readingList } = useContext(AppContext)

  return (
    <>
    <Box sx={{maxWidth:"75%", mx:"auto"}}>
        {
            [...new Set(readingList?.map(JSON.stringify))]?.map(JSON.parse)?.map(
                (book) =><ReadingListBook key={book.id} book={book}/>
            )
        }
    </Box>
    </>
    )
}
