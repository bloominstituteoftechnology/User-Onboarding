import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Usename must be 3 charecters long'),
    email: yup
        .string()
        .trim()
        .email('Must be a valid email adderss')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Password is required'),
    terms: yup
       .string()
       .oneOf(['yes', 'no'], 'Please read the Terms of Service'),
})

export default formSchema