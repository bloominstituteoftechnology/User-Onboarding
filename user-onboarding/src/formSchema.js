// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Username is required ya chump!')
    .min(3, 'Username has to be three characters!'),
  email: yup
    .string()
    .email('Gotta be a valid email address!')
    .required('YOU FORGOT TO ENTER AN EMAIL ADDRESS!!'),
  password: yup
    .string()
    .oneOf(['instructor', 'student', 'alumni', 'tl'], 'Role is required!'),
  userAgreement: yup
    .boolean()
    .required(true),
  coding: yup.boolean(),
  reading: yup.boolean(),
  hiking: yup.boolean()
})

export default formSchema;