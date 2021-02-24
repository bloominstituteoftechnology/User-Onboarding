import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("I need a name")
    .min(4, "your name is too short"),
  email: yup
    .string()
    .email("must be an email address")
    .required("give me email"),
  favDog: yup.string(),
  password: yup.string().min(4).max(10).required("pw is req"),
  tos: yup.boolean().oneOf([true], "You must agree to ToS to continue"),
});
