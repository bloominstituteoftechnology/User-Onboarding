import * as yup from 'yup'

export default yup.object().shape({
    username: yup.string().required('Name is required'),
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
    tos: yup.boolean().oneOf([true], 'Please accept the terms of service'),
})