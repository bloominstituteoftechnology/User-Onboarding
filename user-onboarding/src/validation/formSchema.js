import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Enter Name Here"),

    email: yup
        .string()
        .email("Enter a valid Email Address")
        .required('Email is required'),

    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Enter your PASSWORD HERE (must be 6 characters or more)')
        .matches(/[a-zA-Z]/, "Password can only contain letters"),

    terms: yup
    .boolean()
    .oneOf([true], "Must Accept the Terms of Service")
})

export default formSchema;