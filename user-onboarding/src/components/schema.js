import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('name is required to continue!')
    .min(6, 'name has to be at least six characters!'),
    email: yup
    .string()
    .email('must be a valid email address!')
    .required('email is required to continue!'),
    password: yup
    .string()
    .trim()
    .required('must have a password to continue!')
    .min(8, 'password must be at least 8 characters!'),
    terms: yup.boolean()
})

export default formSchema;