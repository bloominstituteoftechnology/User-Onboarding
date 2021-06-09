import * as yup from 'yup';


const formSchema = yup.object().shape({
   username: yup
    .string()
    .required('Please provide a username')
    .min(5, 'Username must be at least 5 chars')
    .matches(/[a-zA-Z0-9]/, 'Username can only contain alphanumeric chars'),
   email: yup
    .string()
    .email('Please enter a valid email')
    .required('email is required'),
    password: yup
    .string(),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match'),
   tos: yup
    .boolean()
    .required()
    .oneOf([true],'Please check that you have read and agree to our terms of Service'),


});

const yupPass = require('yup')
require('yup-password')(yup)

const passSchema = yupPass
        .string()
        .password()
        .required()


export default formSchema;
export { passSchema };