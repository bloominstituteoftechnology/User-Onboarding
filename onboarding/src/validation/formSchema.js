// import * as yup from "yup";

// const formSchema = yup.object().shape({
//   username: yup
//     .string()
//     .trim()
//     .required("Username is required!")
//     .min(3, "Username must be 3 characters long!"),
//   email: yup
//     .string()
//     .email("Must be a valid email address")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .required("Password is required!")
//     .min(6, "Password must be 6 characters long!"),
//   tos: yup.boolean().oneOf([true], "Must accept the terms and conditions."),
// });

// export default formSchema;

import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must have a minimum of 3 characters")
    .max(40, "Name must have a maximum of 40 characters")
    .trim()
    .required("Name is required for submission"),
  phoneNumber: yup
    .number("Phone number must be a 10 digit number")
    .min(
      1000000000,
      "Please enter the phone number as 10 digits. Do not include the country code or dashes"
    )
    .max(
      9999999999,
      "Please enter the phone number as 10 digits. Do not include the country code or dashes"
    ),
  email: yup
    .string()
    .email("Valid email is required for submission")
    .trim()
    .required("Valid email is required for submission"),
  password: yup
    .string()
    .min(8, "Password must have a minimum of 8 characters")
    .max(20, "Password must have a maximum of 20 characters")
    .trim()
    .required("Name is required for submission"),
  tos: yup.boolean().oneOf([true], "You must agree to the Terms of Service"),
});

export default schema;
