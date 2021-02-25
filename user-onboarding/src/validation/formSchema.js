import * as yup from 'yup'


const formSchema =yup.object().shape({
    username: yup.string()
        .trim()
        .required('Username of Hero is Required!')
        .min(7, 'A HEROS name must have seven letters and preferably three sylables.'),
    email: yup.string()
        .email('Must be a valid heroic Email')
        .required('Heroic Email is required'),
    roll: yup.string()
        .oneOf(['wizard', 'rogue', 'warrior'], 'Roll is required'),
    termsOfService: yup.string()
    .required(),
    password: yup.string()
    .trim()
    .required('Input password please')
    .min(10, 'Password must be at least 8 letters long, include at least one uppercas and lowercase letter, at least one number and one special symble')


})

export default formSchema


