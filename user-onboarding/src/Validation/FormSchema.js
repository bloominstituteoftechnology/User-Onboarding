import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup 
        .string()
        .trim()
        .required('name is required')
        .min(3, 'name must be 3 characters at least'),
    email: yup 
        .string()
        .email('must be a valid email')
        .required('email is required'),
    password: yup
        .string()
        .trim()
        .required('password is a must')
        .min(5, 'password must be more than 5 characters'),
    termsOfService: yup.boolean(),

})

export default formSchema;