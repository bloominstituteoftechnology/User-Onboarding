import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required("username required").min(3, "username must be at least 3 characters long"),
    password: yup.string().required("password required").min(5, "password must be at least 5characters long"),
    email: yup.string().email("you must provide a valid email").required("email required"),
    role: yup.string().required("please define your role"),
    termOfUse: yup.boolean(),
})

export default schema