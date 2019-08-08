import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ values, errors, touched, isSubmitting, status }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);
  return (
    <>
      <Form className="form">
        <div className="container">
          <div className="field">
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" id="name" className="field" />
            {touched.name && errors.name && <p>{errors.name}</p>}
          </div>
          <div className="field">
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" id="email" className="field" />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>
          <div className="field">
            <label htmlFor="password">Password: </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="field"
            />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>
          <div className="field">
            <label htmlFor="terms">Accept Terms of Conditions</label>
            <Field
              type="checkbox"
              name="terms"
              id="terms"
              checked={values.terms}
            />
            {touched.terms && errors.terms && <p>{errors.terms}</p>}
          </div>
          <Field component="select" name="dropdown">
            <option value="pencil">Pencil</option>
            <option value="marker">Marker</option>
            <option value="pen">Pen</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        <div className='current'>
        <h1>Current Users</h1>
      {values.user && values.users.map(user => console.log("each user", user))}
      {users
        ? users.map(user => (
            <p key={user.id} className="users">
             {user.name}
            </p>
          ))
        : null}
        </div>
        </div>
      </Form>
    </>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ name, email, password, terms, dropdown, users }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false,
      dropdown: dropdown || "pencil",
      users: ['Example User']
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "must be 3 characters")
      .required("This field is required"),
    email: Yup.string()
      .email("Not valid entry")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "At least 6 characters")
      .required("This field is required"),
    terms: Yup.boolean().oneOf([true], "Must Agree To TOS")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    if (values.email === "crawlthis@hehe.com") {
      setErrors({ email: "Thats already in use try again" });
    } else {
      axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
          setStatus(res.data);
          resetForm();
          setSubmitting(false);
          window.alert(`Name: ${res.data.name}, Email: ${res.data.email}`);
        })
        .catch(err => {
          console.log(err, "RUH ROH");
          setSubmitting(false);
        });
    }
  }
})(UserForm);

export default FormikUserForm;


