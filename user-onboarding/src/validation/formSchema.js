import * as yup from 'yup';


const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required'),
    email: yup
        .string()
        .email('must be a valid email')
        .required('email is required'),
    password: yup
        .string()
        .trim()
        .required('must have a password'),
    terms: yup.boolean(),

});

export default formSchema;