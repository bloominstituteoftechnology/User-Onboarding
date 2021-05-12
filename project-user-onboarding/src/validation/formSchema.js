import * as yup from "yup";

export const schema = yup.object().shape({
  password: yup
    .string()
    .min(3, "Must be at least 3 characters!")
    .required("Username is required!"),
  email: yup
    .string()
    .email("Must be a valid email!")
    .required("Email is required!"),
    terms: yup
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions")
});
