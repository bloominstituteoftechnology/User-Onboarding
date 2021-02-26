import * as yup from "yup";

let schema = yup.object().shape({
  fname: yup.string().required("Please provide a first name"),
  lname: yup.string().required("Please provide a last name"),
  email: yup.string().email("This is not a valid email address").nullable(),
  department: yup.string().required("Please provide a valid home department"),
  termsConditions: yup
    .boolean()
    .required("Please ensure materials have been collected first"),
});

export default schema;
