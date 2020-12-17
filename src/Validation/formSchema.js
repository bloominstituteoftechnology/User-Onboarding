import * as yup from 'yup';

export default yup.object() .shape({
    firstName: yup
    .string()
    .required('First name is required'),
    lastName: yup
    .string()
    .required('Last name is required'),
    email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
    password: yup
    .string()
    .required('Password is required')
    .min(8,'Password must be a minimum of 8 chars'),
    termsOfService: yup.boolean()
    .oneOf([true],'The terms of service must be accepted'),
})