import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const UserForm = ({ errors, touched, values, handleChange, status }) => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
    <div className="userform">
      <Form>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}

        <Field
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <Field
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <label className="checkbox-container">
          Terms of Service
          <Field
            type="checkbox"
            name="terms"
            checked={values.terms}
            onChange={handleChange}
          />
          <span className="checkmark" />
        </label>

        <button type="submit">Submit!</button>
      </Form>

      {users.map(user => (
        <div className=">user-card">
          <p key={user.id}>{user.name}</p>
          <p key={user.id}>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter your name!"),
    email: Yup.string().required("Pleae enter your email!"),
    password: Yup.string().required("Please enter a password!")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(UserForm);

export default FormikForm;
