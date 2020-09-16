import * as yup from 'yup'

export default yup.object().shape({
  username: yup.string()
    .required('Username is required')
    .min(3, 'Username must be 3 chars or longer'),
  email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  role: yup.string()
    .oneOf(['tl', 'instructor', 'alumni', 'student'], 'Role is required'),
  civil: yup.string()
    .oneOf(['single', 'married'], 'Civil status is required'),
  // we are done with checkboxes
  hiking: yup.boolean(),
  reading: yup.boolean(),
  coding: yup.boolean(),
})