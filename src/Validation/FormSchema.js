import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username required')
        .min(3, 'username must be 3 characters'),
    email: yup
        .string()
        .email('email required')
        .required('email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be 6 characters'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept the terms and conditions')
        
})

export default formSchema