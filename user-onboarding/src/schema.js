import * as yup from 'yup'

export default yup.object().shape({
    first_name: yup.string().required('Not a valid first name'),
    last_name: yup.string().required('Not a valid last name'),
    role: yup.string().oneOf(["tl", "instructor", "alumni", "student"]),
    email: yup.string().required('Not a valid email'),
    password: yup.string().required('Not a valid password'),
    terms: yup.string().required('Please accept terms of service'),
})