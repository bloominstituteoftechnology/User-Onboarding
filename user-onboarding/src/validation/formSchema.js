import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name:yup
        .string()
        .trim()
        .required('First Name is a required field!')
        .min(2, 'First Name must be at least 2 characters.'),
    last_name:yup
        .string()
        .trim()
        .required('Last Name is a required field!')
        .min(2, 'Last Name must be at least 2 characters.'),
    email: yup
        .string()
        .email('Please enter a valid email address.')
        .required('Email is a required field!'),
    password: yup
        .string()
        .required('Please enter your password')
        .min(8, 'Password must be at least 8 characters.'),
    termsofservice: yup
        .boolean()
        .oneOf([true], 'Please accept the Terms of Service.'),
})

export default formSchema;