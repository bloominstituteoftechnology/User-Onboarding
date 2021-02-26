import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup.string()
        .trim()
        .required('name is required, please fill out.')
        .min(3, 'name must be 3 characters long'),

    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required'),

    password: yup.string()
        .trim()
        .required('Password is required')
        .min(3, 'name must be 3 characters long'),

   // Checkboxes are not required
   termOfService: yup.boolean(),
    
})

export default formSchema