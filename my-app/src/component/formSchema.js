import * as yup from 'yup';

//Yup Schema - outside the function scope
const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Must include name.'),
    email: yup
      .string()
      .email()
      .required(), 
    password: yup
      .string()
      .required('Must include letters and numbers'),
    terms: yup
      .boolean()
      .oneOf([true])
  });