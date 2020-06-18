import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long.")
    .required("Name must be at least 3 characters long."),
  email: Yup.string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Password is Required"),
  role: Yup.string().oneOf(
    ["Instructor", "Team Lead", "Front End Engineer", "Back End Engineer"],
    "Please select a role"
  ),
  terms: Yup.boolean().oneOf([true], "Must agree to Terms of Service"),
});

export default formSchema;
