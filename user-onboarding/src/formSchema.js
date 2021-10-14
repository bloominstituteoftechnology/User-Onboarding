import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First name is required'),
    last_name: yup
        .string()
        .trim()
        .required('Last Name is required'),
    email: yup
        .string()
        .trim()
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Password is required'),
    termsOfService: yup
        .string()
        .required('Terms of Service is required')
});


export default formSchema