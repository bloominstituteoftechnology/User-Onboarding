import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required("Please enter the Users name")
        .min(2, "Name must be at least two characters"),
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Please enter an email"),
    password: yup
        .string()
        .required("Enter a valid Password")
        .min(8, "Password must be at least 8 characters"),
    tos: yup.boolean(),
});