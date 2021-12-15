import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is required!')
    .min(6, 'Username must be at least 6 characters long!'),

    email: yup
    .string()
    .email('Must be a valid email address')
    .required('Email is required'),

    password: yup
    .string()
    .required('Password is required!')
    .min(8, 'Password must be at least 8 characters'),
    tos: yup
    .boolean()
    .oneOf([true], 'You must accept the terms & conditions before proceeding')
})

export default formSchema;