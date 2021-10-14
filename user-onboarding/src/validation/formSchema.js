import * as yup from 'yup';

const formSchema = yup.object().shape({
    Name: yup
        .string()
        .trim()
        .required('Username is required ya chump!')
        .min(3, 'Username must be 3 or more characters long ya chump!'),
    Email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .required('password required')
        .min(8, 'password must be over 8 characters in length'),
    TermsofService: yup.boolean(),
    reading: yup.boolean(),
});

export default formSchema;