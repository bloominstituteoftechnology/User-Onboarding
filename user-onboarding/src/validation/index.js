import * as yup from 'yup';


// validation using yup to check name,email,password
export default yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup.string().email('Email must be real.').required('Email required.'),
  password: yup
    .string()
    .required('Password required.')
    .min(3, 'Passwords must be longer than 3 characters.')
    .max(15, 'Passwords cannot exceed 15 characters.'),
  tos: yup.bool().oneOf([true], 'You must accept the Terms of Service.'),
});