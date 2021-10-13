import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be 3 or more characters'),

    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup  
        .string()
        .trim()
        .required('Password is required')
        .min(3, 'Password must be 3 or more characters'),
    tos: yup.boolean()
});

export default formSchema;