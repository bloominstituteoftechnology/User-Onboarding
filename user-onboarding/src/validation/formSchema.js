import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First name is required')
        .min(3, 'Name must be 2 or more characters'),
    last_name: yup
        .string()
        .trim()
        .required('Last name is required')
        .min(3, 'Name must be 2 or more characters'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    termsOfService: yup
        .string()
        .required('Terms of Service is required'),
   
});

export default formSchema;