import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 chars long"),
  email: yup.string().email("must be an email").required("email is required"),
  password: yup
    .string()
    .min(3, "password must be 3 chars long")
    .required('Please enter a password'),
  terms: yup
    .boolean()
});