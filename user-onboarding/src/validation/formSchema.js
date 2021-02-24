import * as yup from 'yup'


export default const formSchema =yup.object().shape({
    username: yup.string()
        .trim()
        .required('Username of Hero is Required!')
        .min(7, 'A HEROS name must have seven letters and preferably three sylables.'),
    email: yup.string()
        .email('Must be a valid heroic Email')
        .required('Heroic Email is required'),
    roll: yup.string()
        .oneOf(['wizard', 'rogue', 'warrior'], 'Roll is required')
    termsOfService: yup.boolean(),

})