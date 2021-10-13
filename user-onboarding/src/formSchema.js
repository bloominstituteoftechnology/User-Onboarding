import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First name is required'),
    last_name: yup
        .string()
        .trim()
        .required('First name is required'),
    email: yup
        .string()
        .trim()
        .required('First name is required'),
    password: yup
        .string()
        .trim()
        .required('First name is required'),
    termsOfService: yup
        .string()
        .trim()
        .required('First name is required'),
});





export default formSchema