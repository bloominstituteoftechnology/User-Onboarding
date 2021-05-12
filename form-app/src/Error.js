import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().min(3, "Must be at least 3 characters!").required("Username is required!"),
    email: yup.string().email("Must be a valid email!").required("Email is required!"),
    password: yup.string().min(8, "Must be at least 8 characters!").required("Password is required!"),
    serviceTerms: yup.boolean().required("Must read Terms of Service before continuing!"),
})