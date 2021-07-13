import * as yup from "yup";

export default yup.object().shape({
    name: yup.string()
    .required("name is required")
    .min(4, "username must be at least 4 characters long"),
    email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
password: yup
.string()
.min(6, "password must be at least 6 characters long")
.required("must enter a password"),



})