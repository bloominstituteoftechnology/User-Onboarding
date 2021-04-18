import * as yup from 'yup'

let schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email(),
    password: yup.string().required().min(8).max(15),
    role: yup.string().oneOf(['driver', 'mover']).required(),
    terms: yup.bool().oneOf([true])
})

export default schema;