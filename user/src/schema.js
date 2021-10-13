import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name Required')
        .min(3, 'Name must be at least 3 characters'),
    email: yup
        .string()
        .email('Must be a valad email address')
        .required('Email Required'),
    password: yup
        .string()
        .required('Password Required')
        .min(3, 'Password must be at least 3 characters'),
    terms: yup
        .boolean(true)
        .oneOf([true], 'Must agree to terms'),


})

export default schema;