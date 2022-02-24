import * as yup from 'yup'

const schema = yup.object().shape({
    name:yup
        .string()
        .trim()
        .required('You need a name to be a user duh!')
        .max(40,'alright calm down your name is not that long'),

    email:yup
        .string()
        .trim()
        .required('need an email from ya bud')
        .email('you have to give me a real email address'),
    password:yup
        .string()
        .required('Please Enter your password')
        .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    tos:yup
        .boolean()
        .oneOf([true],'if you dont accept the tos you can just leave')
})  

export default schema