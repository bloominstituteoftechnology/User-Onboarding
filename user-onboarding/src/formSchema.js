import * as yup from 'yup';





export default yup.object().shape({
    name: yup
        .string('You must enter your name')
        .required('You must enter your name'),
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: yup
      .string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
    termsOfService: yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions")
      // required isn't required for checkboxes.
  });