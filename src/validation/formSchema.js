import * as yup from "yup";


export default yup.object().shape({
    name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
    email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
    password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be five characters or more"),
    terms: yup
    .boolean()
    .required("Must accept TOS")
    .oneOf([true], 'Must accept TOS to continue')
})