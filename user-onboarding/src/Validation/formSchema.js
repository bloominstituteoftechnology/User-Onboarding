import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username must be 3 characters long!'),
    email: yup
        .string()
        .email('Must be a viled email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required!')
        .min(6, 'Password must be 6 characters long!'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept the terms and conditions')

})

export default formSchema