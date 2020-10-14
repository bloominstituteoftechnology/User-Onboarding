import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("name is required")
        .min(4, "name must be at least three characters"),
    email: yup 
        .string()
        .email("valid email address is required")
        .required("email is required"),
    password: yup   
        .string()
        .required("password is required")
        .min(8, "Password must be at least 8 characters."),
    terms: yup
        .boolean()
        .required("must accept terms and conditions"),
});