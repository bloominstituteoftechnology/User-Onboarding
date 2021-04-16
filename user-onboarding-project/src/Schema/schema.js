import * as yup from 'yup'

let schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email(),
    password: yup.string().required('Unique password of 8-15 characters is required'),
    role: yup.string().oneOf(['driver', 'mover']).required('You must choose your role'),
    terms: yup.boolean('You must agree to Terms of Service')
})

export default schema;