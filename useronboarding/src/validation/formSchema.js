import * as yup from 'yup';

const formSchema = yup.object().shape({ 
    username: yup
        .string()
        .trim()
        .required('Usename is required!')
        .min(5, 'Username must be 5 or more characters long!'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required!'),
    password: yup
        .string()
        .trim()
        .required('Password is required!')
        .min(6, 'Password must be 6 or more characters long'),
    tos: yup.boolean()
        .oneOf([true], 'You must agree to the Terms Of Service')
        .required('You must accept the Terms Of Service')

})

export default formSchema;