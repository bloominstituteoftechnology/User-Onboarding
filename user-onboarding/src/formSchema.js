import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
      .string()
      .email('Must be a valid email address.')
      .required('Must include email address.'),
    first_name: yup
      .string()
      .min(1, 'Your first name must be at least 1 character long.')
      .required('First name is Required'),
    last_name: yup
      .string()
      .min(1, 'Your last name must be at least 1 character long.')
      .required('Last name is Required'),
  });

  export default formSchema