import * as yup from 'yup';


const formSchema = yup.object().shape({
    name: yup
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
    .min(6, 'Password must be 6 character long!')

    tos: yup
    .boolean()
    .required('Please read and accept the terms of service'),
})

export default Form