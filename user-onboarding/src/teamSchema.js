import * as yup from 'yup';

const teamSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Name must be at least 4 characters long'),

    email: yup
        .string()
        .trim()
        .email('Must be a valid email address')
        .required('Email is required'),

    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(4, 'Password must be at least 6 characters long'),

    role: yup
        .string()
        .oneOf(['Frontend Engineer', 'Backend Engineer', 'Designer']),

    preference: yup
        .string()
        .oneOf(['In Person', 'Remote'], 'Preference is required'),

    gaming: yup.boolean(),
    photography: yup.boolean(),
    coding: yup.boolean(),
    tos: yup.boolean()

})


export default teamSchema;