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
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Password must contain at least 8 characters, one uppercase, one number and one special case character'),

    termsOfServices: yup
    .boolean(),
})

export default formSchema;