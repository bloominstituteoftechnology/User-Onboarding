import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('what be yer name bucko??')
        .min(3, 'aye! yer name ought to be longer than that!'),
    email: yup
        .string()
        .email('must be a valid email address me hardy!')
        .required('Emails be required!'),
    password: yup
        .string()
        .trim()
        .required('what be yer password landlubber??')
        .min(7, 'aye! yer password best be longer than that!'),
    termsOfService: yup.boolean(true),
})

export default formSchema;