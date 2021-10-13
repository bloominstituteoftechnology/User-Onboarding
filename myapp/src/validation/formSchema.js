import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Your full name is required ya chump!')
        .matches(/[a-zA-Z]/, 'Your name can only contain letters.'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .required('Please enter your password.')
        .min(6, 'Password must include 6 or more characters.')
        .matches(/[a-zA-Z]/, 'Pasword can only contain letters.'),
    terms: yup.boolean()
        .required('Please accept the Terms of Service'),
    card: yup
        .string()
        .required('Credit/Debit card number is required or else!')
        .length(16, 'Dont even try to fool me')
        .matches(/[0-9]/, 'Credit/Debit cards have numbers dumbass'),
    num3: yup
        .string()
        .required('Give me the 3 numbers on the back of your card. Final warning.')
        .length(3, 'Dont even try to fool me')
        .matches(/[0-9]/, 'I asked for numbers dumbass'),
});

export default formSchema;