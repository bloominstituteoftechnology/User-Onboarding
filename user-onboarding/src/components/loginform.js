import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const LoginForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);
  return (
    <>
      <h3>Sign Up Form</h3>
      {/* <Form>
        <Field type="text" name="name" placeholder="Full Name" />
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <label>
          <Field
            name="termsOfService"
            type="checkbox"
            checked={values.termOfService}
          />
          Accept Terms of Service
          {touched.termOfService && errors.termOfService && (
            <p>{errors.termOfService}</p>
          )}
        </label>
        <button type="submit">Submit</button>
      </Form> */}
      <Form>
        <div>
          <label>
            Name:
            <Field
              className="inputField"
              name="name"
              type="text"
              placeholder="Name"
            />
            {touched.name && errors.name && (
              <p className="error">{errors.name}</p>
            )}
          </label>
        </div>
        <div>
          <label>
            Email:
            <Field
              className="inputField"
              name="email"
              type="text"
              placeholder="Email address"
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </label>
        </div>
        <div>
          <label>
            Password:
            <Field
              className="inputField"
              name="password"
              type="text"
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </label>
        </div>
        <div>
          <label>
            Agree to Terms of Service:
            <Field
              className="inputField"
              name="termOfService"
              type="checkbox"
              checked={values.termOfService}
            />
            {touched.termOfService && errors.termOfService && (
              <p className="error">{errors.termOfService}</p>
            )}
          </label>
        </div>
        <button type="submit">Submit</button>
      </Form>
      <h3> LIST OF USERS REGISTERED</h3>
      {users.map(user => {
        return (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        );
      })}
    </>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, email, password, termOfService }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      termOfService: termOfService || false
    };
  },

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email()
      .required("Email is required"),
    password: Yup.string()
      .min(6)
      .required("Password is required"),
    termOfService: Yup.bool().oneOf([true], "Field must be checked")
  })
})(LoginForm);

export default FormikLoginForm;

/* DONE */
