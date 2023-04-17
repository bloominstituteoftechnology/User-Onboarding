import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email('Insert valid email address!')
        .required('Email address is required'),
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username must be longer than 3 characters!'),
    password: yup
        .string()
        .required('Please provide a valid password!')
        .min(8, 'Password must 8 characters or longer'),
    terms: yup
        .boolean()
        .oneOf([true], 'Please agree to Terms of Service')
})

export default formSchema;