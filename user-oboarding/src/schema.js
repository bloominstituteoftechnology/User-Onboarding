import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
    .required('Username is required')
    .min(2, 'Your name has to be longer than that'),
    email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
    password: yup.string()
    .required('Password is definitely required')
    .min(6, 'I could hack this password in my sleep'),
    serviceTerms: yup.boolean([true], 'Dont play'),
})