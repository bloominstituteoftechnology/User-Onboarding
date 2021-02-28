import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Username is required.')
        .min(3, 'Username must be 3 characters long'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup.string()
        .required('Password is required.'),
    termsOfService: yup.string()
        .required('Terms Of Service is required.')

})

export default formSchema;