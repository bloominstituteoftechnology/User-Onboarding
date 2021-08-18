import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('A First Name is Required'),
    last_name: yup
        .string()
        .trim()
        .required('At Least an Initial is Required'),
    email: yup
        .string()
        .trim()
        .email("Must Be A Valid Email Address")
        .required("An Email is Required"),
    password: yup
        .string()
        .trim()
        .required()
        .min(5,"Password must be at least 5 characters"),
    role: yup
        .string(),
    termsOfService: yup
        .boolean()
        .oneOf([true], "You Must Accept the Terms of Service")
    
})



export default formSchema; 