import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required!!')
        .min(5, 'Username must be at least 5 characters!!'),
    email: yup
        .string()
        .email('You must use a valid email address!!')
        .required('You must enter an email!!'),
    password: yup
        .string()
        .required('You must enter a password!!')
        .min(6, 'Your password must have at least 6 characters!!'),
    tos: yup
        .boolean()
        .oneOf([true], 'You must accept the terms and conditions!!')


})

export default formSchema;