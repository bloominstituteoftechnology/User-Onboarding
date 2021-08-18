import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = ({ values, touched, errors, status }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    status && setUsers((users) => [...users, status]);
  }, [status]);
  return (
    <div>
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}

        <Field type="text" name="email" placeholder="email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <Field type="text" name="password" placeholder="Pasword" />
        <label>
          Terms of Services
          <Field
            type="checkbox"
            name="termsOfServices"
            checked={values.termsOfServices}
          />
        </label>
        <button type="submit">Submit</button>
      </Form>
      {users.map((user) => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.password}</li>
        </ul>
      ))}
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ name, email, password, termsOfServices }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      termsOfServices: termsOfServices || false,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then((res) => {
        setStatus(res.data);
      })
      .catch((err) => console.log(err.response));
  },
})(UserForm);

export default FormikUserForm;