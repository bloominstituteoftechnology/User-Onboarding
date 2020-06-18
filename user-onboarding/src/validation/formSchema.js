// Here goes the schema for the form
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    fullname: Yup
      .string()
      .min(3, "Name must be at least 3 characters long.")
      .required("Full Name is Required"),
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup
      .string()
      .required('You must create a password') 
      .min(6, 'Password is too short - should be 6 chars minimum.')
      .matches(/[a-zA-Z0-9_]/, 'Password can only contain Latin letters, numbers, and underscores.'),
    // This doesn't seem to work?
    //     terms: Yup
    //   .boolean()
    //   .oneOf([true], 'Must Accept Terms and Conditions')
    //   .required('Please accept the TOS'),
  });

  export default formSchema