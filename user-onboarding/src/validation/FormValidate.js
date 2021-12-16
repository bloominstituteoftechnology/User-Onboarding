import * as yup from 'yup';


const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required'),
    email: yup
        .string()
        .trim()
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
    tos: yup
        .boolean()
})

export default formSchema;