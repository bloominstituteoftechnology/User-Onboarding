import * as yup from 'yup'

export default yup.object().shape({
    name: yup
    .string()
    .required('Name is required.')
    .min(3, "Name must be >3 characters."),
    email: yup
    .string()
    .email('You must enter a valid email')
    .required('Email is required'),
    password: yup
    .string()
    .required('A password is required')
    .min(3, 'Password must be >3 characters'),
    terms: yup.boolean().required('you must sign your life away'),
})