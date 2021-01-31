import * as yup from "yup";

export default yup.object().shape({
    name: yup.string().required("name is required").min(3, "must be at least 1 character long"),
    email: yup.string().email("must be a valid email").required("email is required"),
    password: yup.string().required("A password is required").min(6,"password must be at least 6 characters long"),
    terms: yup.boolean(),
})