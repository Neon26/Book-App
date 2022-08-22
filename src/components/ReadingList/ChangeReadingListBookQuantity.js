import React, { useContext } from 'react'
import {useTheme} from '@mui/material/styles'
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material'
import { AppContext } from '../../context/AppContext'
import book from '../../views/book'

const range = (x) => [...Array(x).keys()]

export default function ChangeReadingListBookQuantity({item, qty}) {
    const theme = useTheme()
    const {clearReadingList, addMuliBooksToReadingList} = useContext(AppContext)

    const handleChange = (e) => {
        clearReadingList(book)
        addMuliBooksToReadingList(book, e.target.value).fill(book)
        console.log("qty changed", e.target.value)
    }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="qty-selected"> Qty {qty}</InputLabel>
        <Select
            labelId = "qty-selected"
            id = "qty-id"
            value = {qty}
            label = "Qty"
            onChange = {event=>handleChange(event)}
        >
            {range(10).map((x) => (
                <MenuItem key = {x} value = {x}>
                    {x}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
  )
}
