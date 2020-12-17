import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('must include full name').min(2, 'name must be min of 2 characters'),
  email: Yup.string().email('please enter a valid email').required('must include email'),
  password: Yup.string().required('password required').min(8,'password min is 8 characters'),
  termsOfService: Yup.boolean().oneOf([true],'must sell your SOUULLLL'),
})