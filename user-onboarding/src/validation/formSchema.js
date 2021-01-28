import * as yup from "yup";


export default yup.object().shape({
    name: yup
    .string()
    .required("Name is required")
    .min(4, "Name must be at least 4 characters long"),
    email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
    password: yup
    .string()
    .required("Password is required"),
    terms: yup
    .boolean()
    .oneOf([true], 'Terms of service must be agreed on')
})



