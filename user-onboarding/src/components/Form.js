import React, { useState } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const MyForm = ({ errors, touched, values }) => {
  return (
    <div className="onboard-form">
      <Form>
        <Field name="name" type="text" placeholder="Name" />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && <p className="error">{errors.email}</p>}
        <Field type="password" name="password" placeholder="password" />
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
        <label className="checkbox-container">
          TermsOfService
          <Field
            type="checkbox"
            name="tos"
            checked={values.tos}
          />
          <span className="checkmark" />
          {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}
        </label>
        <button>Submit!</button>
      </Form>
    </div>
  );
};
const FormikForm = withFormik({
  mapPropsToValues({ name, email, password, tos}) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Who dis"),
    email: Yup.string().required("no contact?"),
    tos: Yup.boolean().oneOf([true], "gotta aggree with the terms or you aint gettin in dude!")
  }),
  handleSubmit(values, { setStatus }) {
    axios.post('https://reqres.in/api/users/', values)
    .then(res => {
      console.log(res)
    })
  }
})(MyForm); // javascript currying
export default FormikForm;
