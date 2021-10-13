import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Name must be 3 characters long'),
    email: yup
        .string()
        .trim()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(3, 'Password must be 10 characters long'),
    terms: yup.boolean()
})

export default formSchema