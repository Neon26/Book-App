import { useContext } from "react"
import ButtonGroup from "@mui/material/ButtonGroup"
import IconButton from "@mui/material/IconButton"
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { AppContext } from '../../context/AppContext';

export default function AddRemoveBook({book}) {

  const {addBook, removeBook, clearReadingList} = useContext(AppContext)


    
  return (
    <ButtonGroup sx={{margin: "auto"}}>
      <IconButton key="add" onClick={() => addBook(book)}>
        <AddCircleTwoToneIcon  fontSize="small" />
      </IconButton>
      <IconButton key="remove" onClick={() => removeBook(book)}>
        <RemoveCircleTwoToneIcon fontSize="small" />
      </IconButton>
      <IconButton key="clear" onClick={() => clearReadingList()}>
        <DeleteForeverTwoToneIcon fontSize="small" />
      </IconButton>
    </ButtonGroup>
     )
}
