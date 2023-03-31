import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Must enter username")
    .trim()
    .min(6, "Must be at least six characters long"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least six characters long")
    .required("Password is required"),
  terms: yup.boolean().oneOf([true, false], "Must accept the terms of service"),
});

export default schema;
