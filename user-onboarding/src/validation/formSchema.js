//Using Yup, set up at least two different validations along with custom error messages that will display on screen when validation fails.

import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(20, "name must be 20 chars long"),

  email: yup.string().email("must be an email"),

  password: yup
    .string()
    .required("must be an email")
    .min(8, "password must be min 8 chars long"),

  terms: yup.boolean(),
});
