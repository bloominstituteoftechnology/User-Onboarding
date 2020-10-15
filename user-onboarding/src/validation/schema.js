import * as yup from 'yup'

export default yup.object().shape({
    username: yup.string().required('username is required')
    .min(3, 'username must be 3 characters'),
    email: yup.string().required('must be a valid email address')
    .required('email is required'),
    role: yup.string().oneOf(['front end developer', 'back end developer',
    'marketing', 'project manager']),
    unionStatus: yup.string().oneOf(['union member', 'non-union member']),
    read: yup.boolean(),
    agreed: yup.boolean(),
})
