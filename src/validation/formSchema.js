import * as yup from "yup";

export default yup.object().shape({
  first_name: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be 2 chars long"),
  last_name: yup
    .string()
    .required("Last name is required")
    .min(1, "Last name must be 1 chars long"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required"),
  tosAgree : yup
    .boolean()
    .oneOf([true]), 
});