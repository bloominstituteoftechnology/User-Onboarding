// The schema for the form
import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 6 characters long"),

  term: yup.boolean(),
});
