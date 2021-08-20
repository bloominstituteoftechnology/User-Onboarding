import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long'),
    email: yup
        .string()
        .trim()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
    terms: yup
        .string()
        .oneOf(['agree', 'disagree'], 'Selection is required')
})

export default formSchema