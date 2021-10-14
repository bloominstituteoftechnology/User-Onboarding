import * as yup from 'yup';

const form_schema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Username is required.")
        .min(3, "Username must be 3 or more characters in length"),
    email: yup
        .string()
        .email("Must be a valid email address")
        .required("Email is required"),
    password: yup
        .string(),
    terms_of_service: yup.boolean()
        .oneOf([true],"You must click"),

})


export default form_schema;












































