import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required("username required").min(3, "username must be at least 3 characters long"),
    password: yup.string().required("password required").min(5, "username must be at least 5characters long"),
    email: yup.string().email().required("you must provide an email").email("password required"),
    termOfUse: yup.boolean(),
})

export default schema