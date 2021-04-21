//AYOOOOOOOOOOOOOOOOO
import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "username must be 3 chars long"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  password: yup
    .string()
    .min(5, 'Gimme 5 characters')
    .required("Password is required"),
  terms: yup.boolean().required('You must accept the terms'),
});

// export default yup.object().shape({
//   username: yup
//     .string()
//     .required("username is required")
//     .min(3, "username must be 3 chars long"),
//   email: yup
//     .string()
//     .email("must be a valid email")
//     .required("email is required"),
//   role: yup
//     .string()
//     .oneOf(["tl", "instructor", "alumni", "student"], "role is required"),
//   civil: yup.string().oneOf(["married", "single"], "civil status is required"),
//   // we are done with checkboxes
//   coding: yup.boolean(),
//   hiking: yup.boolean(),
//   reading: yup.boolean(),
// });