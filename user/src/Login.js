import React, {useState, useEffect} from 'react';
//like importing a ui library components
import {  withFormik, Form, Field} from 'formik';
// //Material UI for for-mik
import { TextField, Select } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
//import yup//
import * as Yup from 'yup';
import { axiosWithAuth } from './auth/AxiosAuth';
import axios from 'axios';
import './Login.css';




//Field replaces input
//onchange is handled by formik 
//connect input validation by adding deconstructed props that are available within the withFormik component 
//touched props keeps error message from oappearing when you type for the first time 
//values another prop so formik can keep track of what is checked and not checked 



const Login = ({ errors, touched, values, status }) => {
      // need
      const [signin, setSignin] = useState([]);
      // console.log(signin)

      useEffect(() => {
        if(status) {
          setSignin([...signin, status])
        }
      }, [status])


  return(
    <div>
      <h2>School District Login</h2>
    {/* <h2> Please Login below</h2> */}
    <Form className='container'>
      {touched.name && errors.name && <p>{errors.name}</p> }
      <Field
        className='field'
        type='name'
        name='name'
        label='Enter name here'
        component={TextField} //material-ui-text field
        margin='normal'
        variant='outlined'
        fullWidth
      />
      {/* creates error message */}
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field
        className='field'
        type='email'
        name='email'
        label='Enter email here'
        component={TextField}
        margin='normal'
        variant='outlined'
        fullWidth
      />
  
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field 
      className='field'
      type='password'
      name='password'
      label='Enter password here'
      component={TextField}
      margin='normal'
      variant='outlined'
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              edge="end"
              aria-label="toggle password visibility"
            >
              {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
     <>
      {touched.address && errors.address && <p>{errors.address}</p>}
      <Field 
      className='address'
      type='address'
      name='address'
      label='Enter your school address here'
      component={TextField}
      margin='normal'
      variant='outlined'
      multiline
      rows='4'
      fullWidth
    />
    </>
    
    <br />
    {/* adding dropdown field-was so easy!  */}
    <Field component='select' name='user' className='select' >
      <option value='Admin'>Select: Admin</option>
      <option value='Student'>Select: Student</option>
      <option value='Teacher'>Select: Teacher</option>
    </Field>
    <label>
      {/* wrapping label tag around eveything makes the text clickable too */}

      {touched.tos && errors.tos && <p>{errors.tos}</p>}
      <Field type='checkbox' name='tos' checked={values.tos} className='checkbox'  />
      Please Accept Terms of Service
    </label>
    <br />
    <Button type='submit'  margin='normal' fontSize='small' fullWidth color='primary'>
    Press Me
    </Button>
    </Form>

    {signin.map(sign => (
        <h3 key={sign.id}>You are logged in under the name: {sign.name}</h3>
      ))}

  </div>
  )
}


//using HOC to wrap login with formik
//mapPropsToValues create connection between data and handles; pass in defailt or custom darar to the form 
//have to add new fields 
const FormikLogin = withFormik({
  mapPropsToValues({ name, email, password, tos, user, address}) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      tos: tos || '',
      user: user || '', //changes default value 
      address: address || ''
    }
  },

  //validation schema 
  //telling what shape the data should be like prop types 
  //form validation: user feedback on filling out the form correctly
  // yup will pass or fail the input depending on what you put in 
  //can create custom errors,
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .max(10, 'Name exceeds character limit') 
      .uppercase('name is case sensitive'), //not working
    email: Yup.string()
      .email()
      .required('Did you ignore the first email warning?'),
    password: Yup.number()
      .min(4, "Please enter a password that is 4 characters or longer")
      .required(),
    address: Yup.string()
    .notRequired()
    .max(200, 'Address had exceeded character limit'),
    tos: Yup.boolean()
    .required()
    .oneOf([true],'Select Terms of Service to continue' )
  }),

  // Set a top-level status to anything you want imperatively.
  //  Useful for controlling arbitrary top-level state related to your form. 
  //  For example, you can use it to pass API responses back into your component in handleSubmit.
  handleSubmit(values, {resetForm, setErrors, setSubmitting, setStatus}) {
    // console.log(values
  if (values.email === 'waffle@syrup.com') {
    setErrors({ email: 'Email was already registered, please try another'})
  } else {
    axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
        // console.log(res.data)
        setStatus(res.data)
        resetForm();
        setSubmitting(false)
      })
      .catch(err => {
        console.log(err)
        setSubmitting(false)
      })

  }
  let info = prompt('Are you sure you want to be signed in under this account?', values.email)
  alert(`You are signed in as ${info}, ${values.user} account`)
  }

})(Login)


//changed name of export from login to hoc name 
export default FormikLogin;