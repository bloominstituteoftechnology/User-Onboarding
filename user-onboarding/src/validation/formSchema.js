import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .min(3, 'Name must be 3 characters long'),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required('Email is a required field'),
  password: yup
    .string()
    .required('Password is a required field'),
  tos: yup
    .boolean()
    .oneOf([true], 'Please accept the terms and conditions to continue')
});
