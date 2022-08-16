// Here goes the schema for the form
import * as yup from "yup";

const userFormSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "Username must be three characters long"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Password must be three characters long"),
  tos: yup
  .boolean()
  .oneOf([true], 'Must accept')
})

export default userFormSchema;