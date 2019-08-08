import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function LoginForm({values}) {
  return (
    <Form>
      <Field type="text" name="Name" placeholder="Name" />
      <Field type="text" name="Email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <label>
    <Field type="checkbox" name="tos" checked={values.tos} />
    Accept TOS
  </label>
      <button>Submit!</button>
    </Form>
   
  );
}
const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password, tos }) {
    return {
      email: email || "",
      password: password || "",
      tos: tos || false
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(LoginForm);

export default FormikLoginForm;