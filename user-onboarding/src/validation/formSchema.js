import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required'),
    email: yup
        .string()
        .trim()
        .required('E-mail is required'),
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(6,'Password must be at least 6 characters long'),
    tos: yup.boolean()     
})

export default formSchema