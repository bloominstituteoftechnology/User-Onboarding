import * as yup from 'yup'
const FormSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required, please fill out.')
        .min(3, 'Name must be 3 characters long'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup.string()
        .min(8,'Password must be 8 characters long')
        .required('Password is required, please fill out.'),   
 
    termsOfService: yup.boolean().oneOf([true],'Must Accept Terms of Service'),
    userAgreement: yup.boolean().oneOf([false],'Must accept Terms of Service'),
})

export default FormSchema