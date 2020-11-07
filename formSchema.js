import * as yup from 'yup';

let formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  email: yup.string().required("Email is a required field.").email(),
  password: yup.string().required("Please enter your password"),
  checkbox: yup.boolean().oneOf([true], "You obviously need to read the Terms!")
});

export default formSchema;