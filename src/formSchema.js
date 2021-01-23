// scheme for the form
import * as yup from 'yup';

const schema = yup.object().shape({

name: yup
  .string()
  .trim()
  .required('Name is required')
  .min(3, 'Username must be 3 characters long'),
email: yup 
  .string()
  .email('Must be a valid email address')
  .required('Email is required'),
password: yup
  .string()
  .trim()
  .required('Password is required')
  .min(5, 'Password must be at least 5 characters long'),
role: yup
  .string()
  .oneOf(['note-taker', 'zoom-master', 'facilitator', 'time-keeper'], 'Role is required'),
acceptTerms: yup
  .boolean()
  .required('Please accept the terms and conditions'),

});

export default schema
