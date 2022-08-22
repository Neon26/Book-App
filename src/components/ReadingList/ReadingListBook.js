import {useState, useEffect, useContext} from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import  Avatar  from '@mui/material/Avatar';
import ChangeReadingListBookQuantity from './ChangeReadingListBookQuantity';
import ReadingListCard from './ReadingListCard';
import { AppContext } from '../../context/AppContext';


const Book = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function ReadingListBook({book}) {
    const {readingList} = useContext(AppContext)

    useEffect(() => {
        setQty(readingList.filter((readingListBook) => readingListBook.id === book.id).length)
    }, [readingList, book])

    const [qty, setQty] = useState(readingList.filter((readingListBook) => readingListBook.id === book.id).length)
  return (
    <Grid container spacing={2}>
        <Grid book xs={12} sm={6}>
            <Book>
                <ReadingListCard Book={book}/>
            </Book>
        </Grid>
        <Grid book xs={12} sm={6}>
            <Book>
                <ChangeReadingListBookQuantity item={book} qty={qty}/>
            </Book>
        </Grid>
    </Grid>
    );
}
