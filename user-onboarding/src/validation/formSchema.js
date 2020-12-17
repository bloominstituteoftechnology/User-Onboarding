//Using Yup, set up at least two different validations along with custom error messages that will display on screen when validation fails.

import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(3, "name must be 3 chars long"),

  email: yup
    .string()
    .email("must be an email")
    .required("must include an email to register"),

  password: yup
    .string()
    .required("must have multiple characters")
    .min(8, "password must be min 8 chars long"),

  terms: yup.boolean().oneOf([true], "Please accept Terms to continue."),
});
