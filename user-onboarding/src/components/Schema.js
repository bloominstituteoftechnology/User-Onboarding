import * as yup from 'yup'

export const schema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required')
        .min(5, 'Username must be at least 3 characters long')
        .max(12, 'Username cannot exceed 12 characters'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(5, 'Password must be at least 5 characters long')
        .max(15, 'Password cannot exceed 15 characters'),
    terms: yup
        .boolean()
        .oneOf([true], 'You must agree to the terms of service')
}) 