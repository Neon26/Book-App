import React, {useState, useContext} from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '../components/Button'
import Box from '@mui/material/Box'
import useRegister from '../hooks/useRegister'
import useEdit from '../hooks/useEdit'
import { AppContext } from '../context/AppContext'
import Error from '../components/Error'



// creating a new object that will be the user
const FormSchema = Yup.object(
    {
        first_name:Yup.string().required(),
        last_name:Yup.string().required(),
        email:Yup.string().email("Must be a valid e-mail format").required(),
        password:Yup.string().required(),
        confirm_password:Yup.string().required()
    }
)
// testing user object
// let this_user = {
//     first_name:'Shayne',
//     last_name:'Hakuna',
//     email:'sh@gamil.com',
//     password:'123',
// }


// initial values for the form
// registering the user
export default function RegisterForm() {
    const {user} = useContext(AppContext)

    const initialValues={
        first_name:user?user.first_name: '',
        last_name:user?user.last_name: '',
        email:user?user.email: '',
        password:user?user.password: '',
        confirm_password:user?user.confirm_password: ''
    }

    const[registerInfo, setRegisterInfo] = useState({})
    const[userEdit, setUserEdit] = useState({})
    const [error, setError] = useState('')

    useRegister(registerInfo, setRegisterInfo, setError)
    useEdit(userEdit, setUserEdit)
    // what happens on submit
    const handleSubmit=(values)=>{
        console.log(values)
        if(user){
            setUserEdit(values)
        }else{
            setRegisterInfo(values)
        }
    }
   

    // creating the formik hook and transforming the values into the user object
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values)=> handleSubmit(values)
    })



  return (
    // creating the form
    <form onSubmit={formik.handleSubmit}>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', mx:"auto"}}>
            <TextField
                id ="first_name"
                name="first_name"
                fullWidth
                sx={{mb: 2, mt:2,}}
                label="First Name"
                placeholder="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error = {formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
            />
            <TextField
                id ="last_name"
                name="last_name"
                fullWidth
                sx={{mb: 2, mt:2}}
                label="Last Name"
                placeholder="Last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error = {formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
            />
            <TextField
                id ="email"
                name="email"
                fullWidth
                sx={{mb: 2, mt:2,}}
                label="Email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error = {formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                id ="password"
                name="password"
                type="password"
                fullWidth
                sx={{mb: 2, mt:2}}
                label="Password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error = {formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
                id ="confirm_password"
                name="confirm_password"
                type="password"
                fullWidth
                sx={{mb: 2, mt:2}}
                label="Confirm Password"
                placeholder="Confirm Password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                error = {formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                helperText={formik.touched.confirm_password && formik.errors.confirm_password}
            />
            
            <Button type="submit">{user?.token? 'Update':'Register'}</Button>
            <Error>{error}</Error>
        </Box>
    </form>
  )
}
