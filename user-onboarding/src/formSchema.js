import * as yup from 'yup'

const formSchema = yup.object().shape({
    username:yup.string()
        .required("Username is required."),
    email:yup.string()
        .email("Email must be a valid email")
        .required("Email is required."),
    password:yup.string()
        .required("Password is required."),
    agreed:yup.boolean()
        .oneOf([true], "You must agree to the terms of service.")
        .required(true,"You must agree to the terms of service."),

})

export default formSchema;