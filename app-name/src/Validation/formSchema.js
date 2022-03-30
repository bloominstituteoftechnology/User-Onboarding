import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup 
        .string()
        .trim()
        .required("Username is required")
        .min(3, 'Username must be 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid  email')
        .required('Email is required'),
    password: yup
        .string()
        .required()
        .min(6, 'Password must be 6 characters'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept TOS')
})

export default formSchema