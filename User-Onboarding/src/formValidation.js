import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .max(50, "More than 50 characters? Online forms must be a chore for you.")
        .required("Not having a name must make life tough."),
    email: yup
        .string()
        .email("Real emails only, please.")
        .required("For hittin' you up with updates"),
    password: yup
        .string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Password is Required"),
    termsOfService: yup
        .boolean()
        .oneOf([true], "Read it or don't but we need you to at least pretend you read it.")
});