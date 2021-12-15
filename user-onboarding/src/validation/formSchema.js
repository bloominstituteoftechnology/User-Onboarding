import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(2, 'Name has to be at least 2 characters!'),

    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required!'),
    password: yup
        .string()
        .min(5, 'Password has to be at least 5 characters!')
        .required('Email is required!'),

    terms: yup
        .boolean()

})


export default formSchema;