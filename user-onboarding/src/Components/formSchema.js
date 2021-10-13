import * as yup from 'yup';

const formSchema = yup.object().shape({
    fname: yup
        .string()
        .required('first name is required')
        .min(2, 'First name must be 2 or more characters'),
    lname:yup
        .string()
        .required('last name is required')
        .min(2, 'Last name must be 2 or more characters'),
    email: yup
        .string()
        .email('must  be a valid email address')
        .required('Email is required'),
    agree: yup.boolean(),
    disagree: yup.boolean()
})