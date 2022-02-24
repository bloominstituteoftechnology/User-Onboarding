import * as yup from 'yup'

const Schema = yup.object().shape({
    first_name: yup.string().trim().required('Name required').min(3, "Please do not use a nickname"),
    email: yup.string().email("Must be valid email address").required("Email required"),
    password: yup.string().min(8, "Please enter a valid password eight characters or longer"),
    termsOfService: yup.boolean().oneOf([true], "Box must be checked to continue")
})


export default Schema