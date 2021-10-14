// Here goes the schema for the form
import * as yup from 'yup';
console.log('FORM SCHEMA')

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Must be 2 or more characters'),
    lastName: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Must be 2 or more characters'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(4, 'Must be 4 or more characters'),    
    termsOfService: yup.boolean(),

});

export default formSchema;