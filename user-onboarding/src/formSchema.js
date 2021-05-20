// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be 2 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .trim(),
        // .required('You must creat a password')
        // .min(8, 'Password must be (at least) 8 characters long'),
    terms: yup.boolean(),
})

export default formSchema