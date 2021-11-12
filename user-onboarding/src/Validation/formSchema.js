import * as yup from 'yup';


const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(1, 'You must use at least 1 character'),

    email: yup
    .string()
    .email('Must be a valid email address')
    .required('You must have an email '),

    password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be 6 character long!'),

    tos: yup
    .boolean()
    .oneOf([true], 'Please read and accept the terms of service'),
})

export default formSchema;