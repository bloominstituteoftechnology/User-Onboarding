import * as yup from 'yup';

const schema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('Name is required ya chump!!')
        .min(3, 'Name must be 3 characters long ya chump!!'),
    last_name: yup
        .string()
        .trim()
        .required('Name is required ya chump!!')
        .min(3, 'Name must be 3 characters long ya chump!!'),
    email: yup
        .string()
        .email('Must be a valid email address ya chump!!')
        .required('You gotta have an email.'),
    password: yup
        .string()
        .trim()
        .required('Password is required ya chump!!')
        .min(3, 'Password must be 3 characters long ya chump!!'),
    ToS: yup.boolean(),
})

export default schema;