import * as yup from 'yup'

const formSchema = yup.object().shape({

    name: yup
    .string()
    .trim()
    .min(3)
    .required('A password is required.'),

    email: yup
    .string()
    .email('Must be a valid email.')
    .required('An email is required.'),

    password: yup
    .string()
    .required('A password is required'),

    tos: yup
    .boolean()
    .oneOf([true], 'Must agree to our Terms of Service to create user profile.'),

})

export default formSchema