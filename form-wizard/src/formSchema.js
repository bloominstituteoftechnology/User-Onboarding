import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, "Name must be 3 characters long")
    .required("Name is required, please fill out."),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("A password is required")
    .min(6, "Name must be 6 characters long"),
  terms: yup
    .boolean()
    .oneOf([true], "Please accept terms of service to continue"),
});

export default formSchema;
