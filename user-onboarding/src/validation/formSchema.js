import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('A username is required')
        .min(3, 'Username must be 3 or more characters'),
    email: yup
        .string()
        .email('A valid email is required')
        .required('An email is required'),
    
})

export default formSchema;