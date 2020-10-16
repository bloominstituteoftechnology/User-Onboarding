import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(3, "name must be 3 character"),
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
  password: yup
    .string()
    .required("must have a password")
    .min(5,"must have at least 5 characters"), 
  terms: yup.boolean().required("you must agree to the terms"),
 
});