import * as yup from 'yup';

const formSchema= yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(3, 'Name must be 3 or more characters long!'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be 8 or more characters long!'),
    terms: yup
        .bool()
        .oneOf([true],'Please read the terms of service and check the box when you are done!')  
});

export default formSchema;