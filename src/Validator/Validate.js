import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First name is required ya chump!'),
    last_name: yup
        .string()
        .trim()
        .required('Last name is required ya chump!'), 
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    role: yup
        .string()
        .oneOf(['frodo', 'sam'], 'You must pick your favorite!'),
    password: yup
        .string()
        .trim()
        .required('Password name is required ya chump!')
        .min(6, 'Password must be at least 6 characters long.')
        .matches(/[a-z]/, 'at least one lowercase char')
        .matches(/[A-Z]/, 'at least one uppercase char')
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).'),
    termsOfService: yup.boolean().oneOf([true], "You must accept the terms of service.")
});

export default formSchema;