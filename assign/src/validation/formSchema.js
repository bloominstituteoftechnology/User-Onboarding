// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstname: yup
        .string()
        .trim()
        .required('First Name is required!')
        .min(3, 'First name must be 3 or more characters long!'),
    lastname: yup
        .string()
        .trim()
        .required('Last is required ya chump!')
        .min(2, 'Last name must be 2 or more characters long!'),
    // password: yup
    //     .string()
    //     .password('Must be a valid password!')
    //     .required('password is required!'),    
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    role: yup
        .string()
        .oneOf(['frontend', 'backend', 'designer', 'teamleader'], 'Role is required!'),
    civil: yup
        .string()
        .oneOf(['married', 'single'], 'Civil status is required!'),
    full: yup.boolean(),
    half: yup.boolean(),
    contract: yup.boolean()
});

export default formSchema;