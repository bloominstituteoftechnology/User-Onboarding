import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Whats your name?')
        .min(3, 'Username has to be at least 3 characters.'),
    email: yup
        .string()
        .email('Please enter a valid email addy!')
        .required('Email is required.'),
    password: yup
        .string()
        .trim()
        .required('Password required.')
        .min(6, 'Password must be at least 6 characters.'),
    wrkPref: yup
        .string()
        .oneOf(['partTime', 'fullTime'], 'Select your work preference.'),
    terms: yup
        .boolean()
        .required('Please agree to the terms of service. 1')
        .oneOf([true], 'Please agree to the terms of service. 2')
})

export default formSchema;