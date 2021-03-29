import * as Yup from "yup";

export default Yup.object().shape({
  username: Yup
    .string()
    .required("And I'm supposed to call you, hey you?"),
  email: Yup
    .string()
    .email("must be a valid email")
    .required("We need to send you spam mail"),
  password: Yup
    .string()
    .required('secure your account!'),
  tos: Yup
    .boolean()
    .oneOf([true], 'sign away your soul')
});