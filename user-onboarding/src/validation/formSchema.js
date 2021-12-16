import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username required')
    .min(3, 'Username must be at least 3 characters!'),
   email: yup
    .string() 
    .email('Must have valid address')
    .required('Please enter email address')
})

export default formSchema;