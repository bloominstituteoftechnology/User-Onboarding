import * as yup from "yup"

export default yup.object().shape({
    first_name: yup
      .string()
      .required("Name is required"),
    last_name  : yup
      .string()
      .required("Last name is required"),
    email: yup
      .string()
      .email("must be a valid email address")
      .required("email is required"),
    password: yup
    .string()
    .required("password is required")
    .min(8, "password must be 8 character"),
    terms: yup.boolean(),
    button:yup.boolean(),
    title:yup.string()
});