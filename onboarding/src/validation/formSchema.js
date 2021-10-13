import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be 3 characters long'),
    email: yup
        .string()
        .required('Email is required') 
        .email('Must be a valid email address')
        .max(200),
    password: yup
        .string()
        .required()
        .min (6, 'Username must be 6 characters long'),
    tos: yup
        .boolean()
})

export default formSchema