import * as yup from 'yup'

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim(),
        // .required('A username is required')
        // .min(3, 'Username must be 3 or more characters'),
    lastName: yup
        .string()
        .trim(),
    email: yup
        .string()
        .email('A valid email is required')
        .required('An email is required'),
    password: yup
        .string()
        .trim(),
    termsOfService: yup
        .boolean(),
});

export default formSchema;