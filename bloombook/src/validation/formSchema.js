import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required'),
    email: yup
        .string()
        .trim()
        .required('email is required'),
    password: yup
        .string()
        .trim()
        .required('password is required'),
    tos: yup.boolean()
})

export default formSchema;