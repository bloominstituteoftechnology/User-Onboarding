import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup
    .string()
    .trim()
    .required('First name required'),
    lastName: yup
    .string()
    .trim()
    .required('Last name required'),
    email: yup
    .string()
    .email('Pleas enter a valid email address')
    .required('Email is required'),
    password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
    terms: yup
    .boolean()
    .oneOf([true], 'Please agree to terms')
    .required()
})

export default formSchema;