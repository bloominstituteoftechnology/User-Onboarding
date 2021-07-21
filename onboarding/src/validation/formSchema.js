import * as yup from 'yup'
import { boolean } from 'yup/lib/locale'

export default yup.object().shape({
    username: yup
        .string()
        .required("Username is requires")
        .min(3, 'Username must be 3 chars or longer'),
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8).max(16)
        .required('Must provide password'),
    terms: yup
        .boolean()
        .oneOf([true], 'must agree to terms' )
        // .required('Must agree to terms')

})