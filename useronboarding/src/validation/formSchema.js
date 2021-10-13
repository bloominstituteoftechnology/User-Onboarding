import * as yup from 'yup';

const formSchema = yup.object().shape({ 
    username: yup
        .string()
        .trim()
        .required('Usename is required!')
        .min(5, 'Username must be 3 or more characters long!'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    tos: yup.boolean()
})

export default formSchema;