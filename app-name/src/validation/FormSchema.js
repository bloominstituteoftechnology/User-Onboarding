import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username has to be atleast 3 characters'),
    email: yup 
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('A password is required')
        .trim()
        .min(3, 'Password must be atleast 3 characters long'),
    terms: yup 
        .boolean()
        .oneOf([true], 'Must accept terms')
})

export default formSchema;