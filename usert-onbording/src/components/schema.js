import * as yup from "yup"

const schema = yup.object().shape({
    name: yup.string().trim().required('name is required please fill it out').min(3, 'nae must be at least 3 characters long'),
    email: yup.string().trim().email('email address must be valid ').required('Email is required'),
    password: yup.string().trim().required('password is required please fill it out'),
    agree: yup.boolean().oneOf([true], "you must agree to terms of service"),
    language: yup.string().oneOf(['English','Spanish','French'],'language is required and you must select one'),

})


export default schema
