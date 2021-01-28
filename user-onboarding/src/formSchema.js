import { waitForDomChange } from "@testing-library/react";
import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(2, "Must have 3 characters."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Must have valid email."),
  
  state: yup
    .string()
    .required("State is required.")
    .min(2,"Minimum 2 character password."),
  food: yup
    .string()
    .oneOf(["pizza", "tacos", "burgers"], "Food is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Minimum 6 character password.")
    .max(15,"Password over 15 characters."),
  tos: yup
    .boolean()
    .required("Must agree to terms of service."),

})