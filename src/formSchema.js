import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup
    .string()
    .required("username is required")
    .min(3, "name must be 3 characters long"), 
    password: yup
    .string()
    .min(6, "password must be 6 characters long")
    .required("password is required"),
    email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"), 
    termsOfService: yup 
    .string()
    .required("you must agree to the terms and conditions"),
})

export default schema