import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup   
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long'),
    email: yup
        .string()
        .trim()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup   
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    termsOfService: yup.boolean(),
})

export default formSchema