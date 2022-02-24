import * as yup from 'yup'

const Schema = yup.object().shape({
    name: yup.string().trim().required('Name required').min(3, "Name must be full name(first and last name)"),
    email: yup.string().email("Must be valid email address").required("Email required"),
    password: yup.string().min(8, "Please enter a valid password eight characters or longer"),
    termsOfService: yup.boolean().required("Box must be checked to continue")
})


export default Schema