import * as yup from 'yup'

export default yup.object().shape({
  name : yup.string()
        .required('Name is required')
        .min(3, 'Username must be atleast 3 characters long'),
  email: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
  password: yup.string()
        .required('Please provide a password')
        .min(3, 'Your password must be atleast 3 characters long'),
  tos: yup.boolean(),          
})