import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required')
        .min(3, 'name must be 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),

    terms: yup.boolean(),
})

export default formSchema