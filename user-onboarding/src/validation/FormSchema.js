import * as yup from 'yup'

export default yup.object().shape({
    first_name: yup.string()
        .required('First name is required'),
    last_name: yup.string()
        .required('Last name is required'),
    email: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
    pass: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z0-9]/, 'Password can only contain letters and numbers.'),
    tos: yup.boolean()
        .oneOf([true], 'Please accept the Terms of Service')
})
