import * as yup from 'yup';

//validation schema, not fully completed yet

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("You have a name, don't you dingus?")
        .min(2, "No way is your name that short, give me your real name."),
    email: yup
        .string()
        .email('Your email is invalid. Provide a real one next time.')
        .required("You think your email isn't already in a database somewhere? Give it here."),
    password: yup
        .string()
        .trim()
        .required('Hah, what is this, 1997? You need a password.')
        .min(7, 'Hah, too easy. Make it longer.'),
    termsOfService: yup
        .boolean()
        .oneOf([true], "If you don't accept the terms and conditions you shall be executed.")
})

export default schema;