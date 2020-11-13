import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
    .required('username is required')
    .min(5, 'username must be at least 5 chars long'),
    email:yup.string()
    .email('Must be vald email address')
    .required('email is required'),
    password:yup.string()
    .required('password is required')
    .min('8, password must be at least 8 chars long'),
    terms: yup.boolean()
    .oneOf([true], "You must accept Terms and Conditions"),
    

})


//   REFRENCE
// const formSchema = Yup.object().shape({
//     email: Yup
//       .string()
//       .email("Must be a valid email address.")
//       .required("Must include email address."),
//     password: Yup
//       .string()
//       .required("Password is Required")
//       .min(6, "Passwords must be at least 6 characters long."),
//     terms: Yup
//       .boolean()
//       .oneOf([true], "You must accept Terms and Conditions")
//       // required isn't required for checkboxes.
//   });