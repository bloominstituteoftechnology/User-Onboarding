// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be 3 chars long"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  password: yup
    .string()
    .min(6, 'must be 6 char long'),
  termsOfService: yup
  .boolean()
  .oneOf([true], 'must be checked'),
});
