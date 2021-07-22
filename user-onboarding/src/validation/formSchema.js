import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(8).max(16)
        .required('Password is required'),
    terms: yup.boolean()
    .oneOf([true], 'Please agree to terms of service' ),
})

export default formSchema