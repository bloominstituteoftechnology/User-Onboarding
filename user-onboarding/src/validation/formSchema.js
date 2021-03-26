import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be 3 chars long'),
    email: yup
    .string()
    .email('Email is required')
    .required('Email is required'),
    password: yup
    .string()
    .password('Password is required')
    .min(8, 'Password must be 8 chars long'),
    terms: yup.boolean()
    
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