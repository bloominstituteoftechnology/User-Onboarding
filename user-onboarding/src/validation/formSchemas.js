import * as yup from 'yup';

export default yup.object().shape({
    name: yup
      .string()
      .required("name is required")
      .min(3, "name must be 3 chars long"),
    email: yup
      .string()
      .email("must be a valid email")
      .required("email is required"),
    password: yup
      .string()
      .required("password is required"),
    service: yup
    .boolean()
    .oneOf([true], 'Must agree to Terms os Service'),
  });

// const formSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Must be a valid email address.")
//     .required("Must include email address."),
//   password: Yup.string()
//     .required("Password is Required")
//     .min(6, "Passwords must be at least 6 characters long."),
//   terms: Yup.boolean().oneOf([true], "You must accept Terms and Conditions"),
//   // required isn't required for checkboxes.
// });