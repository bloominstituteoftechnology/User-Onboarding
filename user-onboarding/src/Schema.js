import * as yup from 'yup'

const Schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(1, 'Name must be at least 1 character long'),
    email: yup
        .string()
        .trim()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(1, 'Password must be at least 1 character long'),
    termsOfService: yup.boolean()
})

export default Schema