import * as yup from "yup";

export default yup.object().shape({
    first_name: yup
        .string()
        .required("first name is required")
        .min(3, "first name must be at least three characters"),
    last_name: yup
        .string()
        .required("last name is required")
        .min(3, "last name must be at least three characters"),
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