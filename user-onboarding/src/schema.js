import * as yup from "yup"

// console.log(yup.boolean().oneOf([true], "You must accept Terms and Conditions"))



const formSchema = yup.object().shape({
    firstname: yup
    .string()
    .trim()
    .required(""),
    lastname: yup
    .string()
    .trim()
    .required(""),
    email: yup
      .string()
      .trim()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: yup
      .string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
    checked: yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions")
      // required isn't required for checkboxes.
  });

 

  export default formSchema