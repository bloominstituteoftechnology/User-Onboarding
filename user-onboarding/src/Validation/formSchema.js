import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('You must submit a Name to Submit'),
    last_name: yup
        .string()
        .trim()
        .required('You must submit a Name to Submit'),
    email: yup
        .string()
        .email('gotta be an email, friend')
        .required('You must submit an email to Submit'),
    password: yup
        .string()
        .trim()
        .min(6, 'your password must exceed 6 characters')
        .max(14, 'your password is way too long, choose wisely'),
    terms: yup
        .boolean()
        //.required('please accept the terms')
        .oneOf([true], 'you need to check this to move forward'),

})

export default formSchema;