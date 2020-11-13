import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Must be valid email address')
    .required('Must include email address'),
  password: yup
    .string()
    .min(8, 'Passwords must be 8 characters long')
    .required('Must create a password'),
  role: yup
    .string()
    .oneOf(
      ['Backend Developer', 'Frontend Developer', 'Designer', 'Project Manger'],
      'Role is required'
    ),
  status: yup
    .string()
    .oneOf(['Full-time', 'Part-time', 'Contractor'], 'Status is required'),

  terms: yup.boolean().oneOf([true], 'Must accept the terms'),
});
