import * as yup from 'yup';
import YupPassword from 'yup-password';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name is required'),
    email: yup
    .string()
    .email('Must be a valid email address')
    .required('Email is required'),
    password: yup.string().required('password is required'),
    termsOfService: yup.boolean()
})



export default formSchema;