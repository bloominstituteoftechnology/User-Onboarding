import * as yup from "yup";

const formScheme = yup.object().shape({
  firstName: yup.string().trim().required("FirstName is required"),
  lastName: yup.string().trim().required("LastName is required"),
  email: yup
    .string()
    .email("gotta be a valid email")
    .required("You forgot to enter email"),
  password: yup
    .string()
    .required("No password provided")
    .min(6, "password should should contain minimum 6 character"),
  service: yup.boolean().required("Inclompete form"),
});

export default formScheme;
