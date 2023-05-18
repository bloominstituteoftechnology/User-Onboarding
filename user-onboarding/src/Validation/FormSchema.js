import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required.')
        .min(3, "Name must be at least 3 chars"),
    email: yup
        .string()
        .email('Must be valid email')
        .required('Email is required.'),
    password: yup
        .string()
        .required("Password is required")
        .min(7,"Must be at least 6 chars"),
    terms: yup
        .boolean()
        .oneOf([true], "Terms of Service must be excepted.")
})

export default formSchema;