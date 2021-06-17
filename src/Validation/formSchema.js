import * as yup from 'yup'

const forSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .password()
        .required('Password is required')
        .min(5, 'Password must contain 5 or more characters')
    tos:yup.boolean()
    
})

export default formSchema