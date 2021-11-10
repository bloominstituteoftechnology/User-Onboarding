import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
                .string()
                .trim()
                .required('Please fill in your first name!')
                .min(3,'First name should be atleast 3 character long.'),
    last_name: yup
                .string()
                .trim()
                .required('Please fill in your last name!'),
    email: yup
            .string()
            .email('Email address is required'),
    password: yup
                .string()
                .required(),
    terms_of_service: yup.boolean()

})
export default formSchema;