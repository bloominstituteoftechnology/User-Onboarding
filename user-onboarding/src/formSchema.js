import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
    .string()
    .trim()
    .required('Please enter your first name'),
    last_name: yup
    .string()
    .trim()
    .required('Please enter your last name'),
    email: yup
    .string()
    .email('Enter a valid email address')
    .required('Enter address is required'),
    password: yup
    .string()
    .min(5, 'Password must be atleast 5 characters')
    .required('Must enter a password'),
    termsofservice: yup.boolean()
    .oneOf([true], 'Agree to terms of service')
})

export default formSchema