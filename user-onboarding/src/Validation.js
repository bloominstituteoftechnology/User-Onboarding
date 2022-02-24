import * as yup from 'yup'


const Schema = yup.object().shape({
    name: yup.string().trim().min(3,"No Nicknames, please.").max(15, "FINE. Use a nickname, if your name is THIS long!"),
    email: yup.string().email("Valid email required"),
    password: yup.string().min(8,"Password minimum of 8 characters"),
    tos: yup.boolean().oneOf([true], "Terms of Service must be accepted to continue.")
})

export default Schema