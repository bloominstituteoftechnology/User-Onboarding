import * as yup from 'yup';



const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required("Name is required!")
    .min(3, "Must use First and Last name, must be 3 charchaters long!"),
    email: yup
    .string()
    .email("Must be a valid email address")
    .required("You've gotta have an email!"),
    password: yup
    .string()
    .required("Password is required!")
    .min(8, "Must be 8 charchaters long!"),
    termsOfSerice: yup
    .boolean()
    .oneOf([true], "Must accept the Terms Of Service"),
})

export default formSchema;