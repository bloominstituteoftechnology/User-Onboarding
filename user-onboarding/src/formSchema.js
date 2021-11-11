import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup.string().trim().required("A first name is required"),
  lastName: yup.string().trim().required("A last name is required"),
  email: yup.string().trim().required("An email is required"),
  password: yup.string().trim().min(3, "Password must be 3 or more characters"),
  termsOfService: yup
    .boolean()
    .oneOf([true], "You must agree to out TOS. You have no choice"),
});

export default formSchema;
