import * as yup from "yup";

const formSchema = yup.object().shape(
    {
        username: yup
            // makes sure that whatever is input into the form element gets converted to string data
            . string()
            // gets rid of white space in the input
            .trim() 
            // means that the username field is a required field to fill out, whatever you put in parens will be the error message
            .required("You need a username to be a part of our cult :)"),
        email: yup
            .required()
            .string()
            .email("You need to give a valid email, we promise we won't do anything harmful with it :)"),
        password: yup
            .required("")
            .string()
            .min("please give a minimum of 8 characters")
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
            ),
        terms: yup
        .boolean()
        .oneOf( [true], "You must sell your soul to us if you wish to continue :)" )
    }
)

// ! don't forget to export this file

export default formSchema