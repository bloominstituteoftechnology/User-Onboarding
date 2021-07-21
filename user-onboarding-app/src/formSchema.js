import * as yup from "yup";

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Username is required")
        .min(3, "Username must be 3 characters long"),
    email: yup
        .string()
        .email("Must be a valid email address")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be 8 characters long")
        .max(16, "Password must be less then 16 characters long"),
    terms: yup.boolean().oneOf([true], "must check terms"),
})

export default formSchema