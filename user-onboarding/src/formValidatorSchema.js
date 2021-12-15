// Here goes the schema for the form
import * as yup from 'yup';

const formValidatorSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Username is required ya chump!')
    .min(3, 'Username has to be three characters!'),
  email: yup
    .string()
    .email('Gotta be a valid email address!')
    .required('YOU FORGOT TO ENTER AN EMAIL ADDRESS!!'),
  role: yup
    .string()
    .oneOf(['instructor', 'student', 'alumni', 'tl'], 'Role is required!'),
  civil: yup
    .string()
    .oneOf(['married', 'single'], 'Civil status is required!'),
  coding: yup.boolean(),
  reading: yup.boolean(),
  hiking: yup.boolean()
})

export default formValidatorSchema;