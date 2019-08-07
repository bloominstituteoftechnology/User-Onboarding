import React from "react";
import { withFormik, Form, Field } from "formik";

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

export default LoginForm;