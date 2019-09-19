import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required(),
  checkbox: yup
    .bool()
    .test(
      "consent",
      "You have to agree with our Terms and Conditions!",
      value => value === true
    )
    .required("You have to agree with our Terms and Conditions!")
});

const FormByFormik = props => {
  const { onSubmit, initialUser } = props;

  return (
    <Formik 
      onSubmit={onSubmit}
      initialValues={initialUser}
      validationSchema={validationSchema}
      render={props => {
        return (
          <Form className="form">
            <label>Name</label>
            <Field className="input" name="name" placeholder="name"></Field>
            <ErrorMessage name="name" component="div" />

            <label>Email</label>
            <Field className="input" name="email" placeholder="email"></Field>
            <ErrorMessage name="email" component="div" />

            <label>Password</label>
            <Field
              className="input"
              name="password"
              placeholder="password"
            ></Field>
            <ErrorMessage name="password" component="div" />

            <label>Agree to terms and services
            <Field
              className="input"
              name="checkbox"
              checked={props.values.checkbox}
              type="checkbox"
            ></Field>
            </label>
            <ErrorMessage name="checkbox" component="div" />
            <button className="button" type="submit">Submit</button>
          </Form>
        );
      }}
    ></Formik>
  );
};

export default FormByFormik;
