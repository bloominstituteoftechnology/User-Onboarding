import * as yup from 'yup'

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required'),
    email: yup
        .string()
        .email('Must be valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
    terms: yup
        .boolean()
        .oneOf([true], 'Terms and conditions required')
})