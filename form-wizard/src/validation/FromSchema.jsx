import * as Yup from "yup";


const formSchema = Yup.object().shape({
    
  avatar: Yup
    .string()
    .url("Must be a valid avatar url address.")
    .required("Must include avatar url address."),

  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  first_name: Yup
    .string()
    .min(3, "Name must be at least 6 characters long.")
    .required("Name is Required"),
  last_name: Yup
    .string()
    .min(3, "Name must be at least 6 characters long.")
    .required("Name is Required"),
  password: Yup
    .string()
    .min(3, "Password must be at least 6 characters long.")
    .required("Password is Required"),
  termsOfService: Yup
    .string()
    .oneOf(["I agree" ], "Please check terms of services")
});

export default formSchema;