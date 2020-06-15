import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ values, errors, touched, status, handleSubmit }) => {
  const [userForm, setUserForm] = useState([]);
  useEffect(() => {
    status && setUserForm([...userForm, status]);
  }, [status]);

  return (
    <div className="user-form">
      <Form onSubmit={handleSubmit}>
        <Field type="text" name="name" placeholder="Enter Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}

        <Field type="text" name="email" placeholder="Enter Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <Field type="password" name="password" placeholder="Enter Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <label>
          Agree to Terms of Service
          <Field type="checkbox" name="agree" checked={values.agree} />
        </label>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </Form>

      {userForm.map(users => (
        <ul key={users.id}>
          <li>{users.name}</li>
          <li>{users.password}</li>
          <li>{users.email}</li>
        </ul>
      ))}
    </div>
  );
};
const FormikUserForm = withFormik({
  mapPropsToValue({ name, email, password, agree }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      agree: agree || true
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Email Required"),
    password: Yup.string()
      .min(8, "min of 8 characters needed")
      .required("Password Needed"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email Needed")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(response => {
        setStatus(response.data);
        console.log(response);
      })
      .catch(error => console.log(error.response));
  }
})(UserForm);
export default FormikUserForm;