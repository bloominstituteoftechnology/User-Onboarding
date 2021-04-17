import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required("Did you forget your name?"),
    email: yup
    .string()
    .email()
    .required("Emails bro"),
    password: yup
    .string()
    .required("Enter a password"),
    tosCheck: yup
    .boolean()
    .oneOf([true], "Please read and accept Terms of Service")
})