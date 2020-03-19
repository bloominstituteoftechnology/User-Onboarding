import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const UserForm = ({ errors, touched, values, status }) => {
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    status && setUserName(userName => [...userName, status]);
  }, [status]);

  return (
    <div>
      <h1> User Onboarding </h1>

      <Form>
        <p>Username </p>
        <Field type="text" name="user" placeholder="Username" />
        {touched.user && errors.user && <p className="error">{errors.user}</p>}

        <p>Email </p>
        <Field type="text" name="email" placeholder="Enter Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <p>Password </p>
        <Field type="password" name="password" placeholder="Enter Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <Field className="dropdown" component="select" name="options">
          <option>Please Choose an Option</option>
          <option value="UI-Developer">UI Developer</option>
          <option value="Front-End">Front End Developer</option>
          <option value="Back-End">Back End Developer</option>
        </Field>
        {touched.options && errors.options && (
          <p className="error">{errors.options}</p>
        )}

        <label>
          {" "}
          <p>Terms and Conditions </p>
          <Field type="checkbox" name="terms" checked={values.terms} />
          <span />
        </label>
        {touched.terms && errors.terms && (
          <p className="error">{errors.terms}</p>
        )}

        <button type="submit">Submit</button>
      </Form>

      {userName.map(memberId => (
        <div key={userName.Id}>
          <p> Username: {memberId.user}</p>
          <p> Email: {memberId.email}</p>
        </div>
      ))}
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ user, email, password, terms, options }) {
    return {
      user: user || "",
      email: email || "",
      password: password || "",
      terms: terms || false,
      options: options || ""
    };
  },

  validationSchema: Yup.object().shape({
    user: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string(),
    terms: Yup.boolean().required().oneOf([true], "Must agree to terms and conditions"),
    options: Yup.string().notOneOf(["Please Choose an Option"]).required("Please select one")
      
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(response => {
        setStatus(response.data);
        resetForm();
        console.log(response);
      })
      .catch(error => console.log(error.response));
  }
})(UserForm);

export default FormikUserForm;
