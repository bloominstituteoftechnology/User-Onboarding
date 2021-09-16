import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('You must submit a Name to Submit'),
    email: yup
        .string()
        .required('You must submit an email to Submit'),
    password: yup
        .string()
        .trim()
        .min(6, 'your password must exceed 6 characters')
        .max(14, 'your password is way too long, choose wisely'),
    
    
    terms: yup
        .boolean(true, 'you need to check this to move forward'),

})

export default formSchema