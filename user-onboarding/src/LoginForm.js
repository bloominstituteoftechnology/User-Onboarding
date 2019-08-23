import React, { useState } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({ errors, touched, values }) => {
  return (
    <div>
      <Form>
        <Field
          component="input"
          type="text"
          name="name"
          placeholder="Name"
        />
        {touched.name && errors.name && <p>{errors.name}</p>}

        <Field component="input" type="text" name="email" placeholder="Email" />

        {touched.email && errors.email && <p>{errors.email}</p>}

        <Field component="input" type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
  
        <label>
          Terms
          <Field
            type="checkbox"
            name="vaccinations"
            checked={values.terms}
          />
          <span />
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
};

const FormikHOC = withFormik({
  mapPropsToValues({ name, size, password, terms }) {
    return {
      name: name || "",
      email: size || "",
      password: password || "",
      vaccinations: terms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("This is an error."),
    email: Yup.string().email(),
  }),
  handleSubmit(values) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => console.log("handleSubmit: then: res: ", res))
      .catch(err => console.error("handleSubmit: catch: err ", err));
  }
});

const LoginFormWithFormik = FormikHOC(LoginForm);

export default LoginFormWithFormik;












