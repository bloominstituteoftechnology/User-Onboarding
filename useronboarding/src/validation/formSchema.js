import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username  must be 3 characters long!'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .trim()
        .required('Password is required!')
        .min(3, 'Password  must be 5 characters long!'),
    terms: yup.bool().oneOf([true], "You must agree to the ToS to continue"),
})

export default formSchema;