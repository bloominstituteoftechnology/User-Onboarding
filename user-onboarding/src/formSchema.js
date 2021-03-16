// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required, please fill out.')
        .min(3, 'Name must be 3 characters long'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup.string()
        .min(8,'Password must be 8 characters long')
        .required('Password is required, please fill out.'),   
    
   // Checkboxes are required
    Agree: yup.boolean()
    .required(true,'must be checked'),
    Disagree: yup.boolean(),
    Skip: yup.boolean()
    
})

export default formSchema