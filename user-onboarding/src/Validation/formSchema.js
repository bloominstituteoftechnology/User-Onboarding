import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is a necessasity')
    .min(3, 'username must be 3 characters long'),
    email:yup
    .string()
    .email('must be a valid email')
    .required('email is a duh'),
    password:yup
    .string()
    .required('password?! a must!')
    .min(6, 'Password is too weak, try,try again, hint: 6 characters long'),
    tos: yup
    .boolean()
    .oneOf([true], 'Check out the Terms and Conditions and hit that box')
})

export default formSchema;