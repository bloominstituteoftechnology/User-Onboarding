import * as yup from 'yup';

const Schema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(5, 'Name must be 5 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(8).max(16)
        .required('Password is required'),
    agree:yup.boolean(),
    disagree: yup.boolean(),
})
export default Schema;