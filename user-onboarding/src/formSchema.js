import * as yup from 'yup'

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required('A first name is required'),
        // .min(3, 'Username must be 3 or more characters'),
    lastName: yup
        .string()
        .trim()
        .required('A last name is required'),
    email: yup
        .string()
        .email('A valid email is required')
        .required('An email is required'),
    password: yup
        .string()
        .trim()
        .min(3, 'Password needs to be at least 3 characters'),
    termsOfService: yup
        .boolean()
        .oneOf([true], 'You must click this boi')
});

export default formSchema;