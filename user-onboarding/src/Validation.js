import * as yup from "yup";

export default yup.object().shape({
    name: yup.string().required("Name is required").min(3, "Name must be 3 chars long"),
    email: yup.string().email("Must be a valid email").required("Email is required"),
    password: yup.string().required("Password is required").min(3, "Password must be 3 chars long"),
    terms: yup.boolean().oneOf([true],"Must accept terms"),
  
});
