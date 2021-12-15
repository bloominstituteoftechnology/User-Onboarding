import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
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
        .password()
        .required('Email is required!'),

    terms: yup.boolean().required('Checkbox is required'),

})


export default formSchema;