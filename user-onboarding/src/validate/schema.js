import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 chars long"),
  email: yup.string().email("must be an email").required("email is required"),
  password: yup
    .string()
    .required('Password must be 8 characters or more'),
  terms: yup
    .boolean()
    .required()
});