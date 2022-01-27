import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('enter a username')
        .min(3, 'Username has to be three characters!'),
    email: yup
        .string()
        .email('Gotta be a valid email address!'),
    password: yup
        .string()
        .min(5, 'Password has to be 5 characters!'),
    tos: yup.boolean().oneOf([true], 'accept the terms.')
})

export default formSchema;