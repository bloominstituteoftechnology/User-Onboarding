import * as yup from "yup";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  first_name: yup
    .string()
    .min(0, "Please Enter A First Name")
    .required("First name is Required"),
  last_name: yup
    .string()
    .min(0, "Please Enter A Last Name")
    .required("Last name is Required"),
  password: yup
    .string()
    .min(6, "Your Password Needs To Be At Least 6 Characters Long!")
    .required("Password is Required"),
  tos: yup.boolean().oneOf([true], "You must accept Terms and Conditions"),
});

export default formSchema;
