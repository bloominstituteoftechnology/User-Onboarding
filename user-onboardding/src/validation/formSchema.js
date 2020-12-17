import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 chars long"),
  email: yup.string().email("must be an email").required("email is required"),
  password: yup
    .string()
    .oneOf(["tl", "instructor", "student", "alumni"], "role is required"),
  read: yup
    .boolean()

  // we're done with checkboxes

});
