import * as yup from 'yup'

const Schema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name must be filled out!')
    .min(1, 'name must have atleast 1 char'),
    email: yup
    .string()
    .email('Must be a valid email address!')
    .required('email is required'),
    password:yup
    .string()
    .min(5, 'password must be 5 chars')
    .required('must have a password'),
    service:yup.boolean()
    .oneOf([true], 'Field must be checked')
})

export default Schema
