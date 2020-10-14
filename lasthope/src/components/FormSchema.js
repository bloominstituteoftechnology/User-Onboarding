
import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required("You must enter a name.").min(3, "Name should be at least 3 characters long."),
    email: yup.string().required("You must enter an email address.").email("You must enter a valid email address."),
    password: yup.string().required("You must enter a password").min(7, "Password must be at least 7 characters long."),
    tos: yup.boolean().oneOf([true], "You must accept the terms of service"), 
})