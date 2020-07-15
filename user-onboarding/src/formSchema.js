import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup.string()
        .trim()
        .min(3, 'Username must be at least 3 characters long')
        .required('Username is a required field'),
    last_name: yup.string()
        .trim()
        .min(3, 'Username must be at least 3 characters long')
        .required('Username is a required field'),
    email: yup.string()
        .email('You must enter a valid email address')
        .required('Email is a required field'),
    password: yup.string()
        .required('Password is a required field'),
    termsOfService: yup.boolean().oneOf([true], 'You must accept Terms of Service')



})

export default formSchema