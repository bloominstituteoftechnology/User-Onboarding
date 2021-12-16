import * as yup from "yup";

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required("Your first name is required.")
    .min(3, "Name has to be 2 characters."),
  last_name: yup
    .string()
    .trim()
    .required("Your last name is required.")
    .min(3, "Last name has to be 3 characters."),
  email: yup
    .string()
    .email("Needs to be a valid email address.")
    .required("You forgot to add your email address."),
  password: yup
    .string()
    .required("You forgot to add a password")
    .min(6, "Your password needs to be a least 6 characters."),
  termsOfService: yup.boolean(),
});

export default formSchema;
