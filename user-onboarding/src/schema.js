import * as yup from 'yup'

export default yup.object().shape({
    username: yup.string().required('Not a vallid username'),
    role: yup.string().oneOf(["tl", "instructor", "alumni", "student"]),
    email: yup.string().required('Not a valid email'),
    password: yup.string().required('Not a valid password'),
    terms: yup.string().required('Please accept terms of service'),

})