import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username required')
        .min(3, 'Username must be at least 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email required'),
    password: yup
        .string()
        .required('Password required')
        .min(6, 'Password must be at least 6 characters long' )
        .max(16, 'password must be less than 16 characters long'),
    
    tos: yup.boolean()
    .oneOf([true], 'Must agree to Terms of Service'),
})

export default formSchema