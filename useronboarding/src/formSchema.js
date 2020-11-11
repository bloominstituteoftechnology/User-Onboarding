// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "name must be 3 characters"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("email is required"),
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username must have 4 characters"),
  password: yup.string().required("Password is required"),
  termsofservice: yup.boolean(),
});
