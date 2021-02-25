import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup.string()
        .trim()
        .required('First Name is required, please fill out.'),
    last_name: yup.string()
        .trim()
        .required('Last Name is required, please fill out.'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup.string()
        .trim()
        .required('Password is required, please fill out.'),
    termsOfService: yup.boolean()
         .required('Must check the box')               
})

export default formSchema