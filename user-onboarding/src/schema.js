import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("And I'm supposed to call you, hey you?"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("We need to send you spam mail"),
  password: yup
    .string()
    .required('secure your account!'),

  
});