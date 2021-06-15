import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup
    .string()
    .required()
    .min(6, "Name must be at least 6 characters long"),
    email: yup
    .string()
    .email("Must be a valid email")
    .required("Email input is required"),
    password: yup
    .string()
    .required("Must input your password")
    .min(8, "Password must be at least 8 characters long"),
    term: yup
    .boolean()
    .required("You must accept the terms of service to continue")
})

export default schema;