import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 chars long'),
    role: yup.string().matches(/(backend|frontend|fulls|data|machine)/, 'Please select a role'),
    tos: yup.boolean().oneOf([true], 'Please agree to the Terms of Service')
})