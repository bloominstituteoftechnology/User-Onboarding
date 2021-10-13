import * as yup from 'yup'

const formSchema = yup.object().shape({

    first_name: yup
    .string()
    .trim()
    .min(3)
    .required('A first name is required.'),

    last_name: yup
    .string()
    .trim()
    .min(3)
    .required('A last name is required.'),

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

    img: yup
    .string()

})

export default formSchema