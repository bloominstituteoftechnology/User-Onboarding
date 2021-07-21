import * as yup from 'yup'

export default yup.object().shape({
    username: yup
        .string()
        .required("Username is requires")
        .min(3, 'Username must be 3 chars or longer'),
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8).max(16)
        .required('Must provide password'),
    terms: yup
        .string()
        .required('Must agree to terms')

    //checkboxes are complete
    // hiking: yup.boolean(),
    // reading: yup.boolean(),
    // coding: yup.boolean(),
})