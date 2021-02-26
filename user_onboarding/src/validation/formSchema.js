// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string().trim()
        .required('Username is required')
        .min(3, "Username must be at least 3 characters"),
    email: yup.string().email().required('Email is required'),
    password: yup.string('Must be a valid email').trim()
        .required('Password is required')
        .min(8, "Password must be at least 8 characters"),
    tos: yup.boolean().oneOf([true],'Acceptance of Terms of Service is required'),
})

export default formSchema;