import React, { useState } from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";

const UserForm = props => {

  const {touched, errors, status} = props;

  console.log(props);

  console.log(status);

  return (
    /// add my own fields to match my needs
    <Form> 
      <label htmlFor="name">Name:</label>
      <Field 
      name="name" 
      placeholder="This is the name of the user." />
      {touched.name && errors.name ? (<span className="error">{errors.name}</span>) : null}

      <label htmlFor="email">Email:</label>
      <Field 
      name="email" 
      placeholder="Please Enter Your Email." />
      {touched.email && errors.email ? (<span className="error">{errors.email}</span>) : null}

      <label htmlFor="password">password:</label>
      <Field
        as="password"
        name="password"
        placeholder="This is the password."
      />
      {touched.password && errors.password ? (<span className="error">{errors.password}</span>) : null}

      <label htmlFor="tos">Read the TOS?:</label>
      <Field 
      name="tos" 
      type="checkbox" />
      {touched.tos && errors.tos ? (<span className="error">{errors.tos}</span>) : null}
      
      <button type="submit" disabled={!props.isValid}>
        Create Note!
      </button>
    </Form>
  );
};
// edits these to match the form
export default withFormik({
  mapPropsToValues: props => {
    return {
      name: props.name || "",
      email: props.email || "",
      password: props.password || "",
      tos: props.tos || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is a required field!"),
    email: Yup.string()
      .email("Email must be valid.")
      .required("Must include email."),
    password: Yup.string().min(5, "Must be at least 5 chars long."),
    tos: Yup.boolean().oneOf([true], "Please check box.")
  }),
  handleSubmit: (values, formikBag) => {
    formikBag.props.addNote({
      ...values,
      id: Date.now()
    });
    formikBag.setStatus("Form Submitting!");
    formikBag.resetForm();
  }
})(UserForm);

