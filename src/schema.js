import * as yup from "yup"

export default yup.object().shape({
username: yup.string().min(3, `must be more than 3 char`),
email: yup.string(),
password: yup.string().required('required').min(8, 'need to be more the 8 char' ),
term: yup.boolean().oneOf([true], 'you must accept')
})
    // })
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