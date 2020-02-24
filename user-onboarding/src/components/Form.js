import React, { useState, useEffect } from "react";
import axios from "axios";

import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

function ProjectForm({ touched, errors, status }) {
  let members = ["patrick devincentis"];
  const [users, setUsers] = useState(members);

  useEffect(() => {
    status && setUsers([...members, status.name]);
  }, [status]);

  return (
    <div>
      {users.map(user => {
        return <h1> {user}</h1>;
      })}
      <Form class="formik-form">
        <label>
          Name:
          <Field type="text" name="name" palceholder="Name" />
          {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}
        </label>
        <label>
          Email:
          <Field type="text" name="email" palceholder="Email" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </label>
        <label>
          Password:
          <Field type="text" name="password" palceholder="password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>
        <label>
          Terms Of Service:
          <Field type="checkbox" name="terms" />
          {touched.terms && errors.terms && (
            <p className="errors">{errors.terms}</p>
          )}
        </label>
        Want to Become a New Member?
        <button name="button"> yes</button>
      </Form>
      {console.log(users)}
    </div>
  );
}

export default withFormik({
  mapPropsToValues: props => ({
    name: "",
    email: "",
    password: "",
    terms: false
  }),
  validationSchema: yup.object().shape({
    name: yup.string().required("This is the name field and it is required!"),
    email: yup
      .string()
      .required("We Need Your Email!")
      .email(),
    password: yup
      .string()
      .required("We Need your password")
      .min(8),
    terms: yup
      .bool()
      .test(
        "consent",
        "You have to agree with our Terms and Conditions!",
        value => value === true
      )
      .required("You have to agree with our Terms and Conditions!")
  }),

  handleSubmit: (values, { resetForm, setStatus }) => {
    // resetForm();
    axios.post(" https://reqres.in/api/users", values).then(response => {
      console.log(response);
      setStatus(response.data);
    });
  }
})(ProjectForm);
