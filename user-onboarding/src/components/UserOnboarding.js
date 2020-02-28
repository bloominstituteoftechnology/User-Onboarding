import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
const UserForm = ({ values, touched, errors, status }) => {
    console.log("errors", errors)
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("status has changed!", status);
    status && setUsers(users => [...users, status]);
  }, [status]);
  return (
    <div className="user-form">
      <Form>
        <label htmlFor="name">
          Name</label>
          <Field
            id="name"
            type="text"
            name="name"
            placeholder="name"
          />
          {touched.name && errors.name && 
            <p className="errors">{errors.name}</p>
          }
        
        <label htmlFor="email">Email:</label>
        <Field id="email" type="text" name="email" placeholder="email" />
        {touched.email && errors.email && <p className="errors">{errors.email}</p>}
        <label htmlFor="password">Password:</label>
        <Field id="password" type="password" name="password" placeholder="password"/>
        {touched.password && errors.password && <p className="errors">{errors.password}</p>}
        
        <label htmlFor="termsofservice" className="checkbox-container">
          Terms of Service
          <Field
            id="termsofservice"
            type="checkbox"
            name="termsofservice"
            checked={values.termsofservice}
          />
          <span className="checkmark" />
        </label>
        <button type="submit">Submit!</button>
      </Form>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      {users.map(user => (
        <ul key={user.id}>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Terms Of Service: {user.termsofservice}</li>
            <li>Password: {user.password}</li>
        </ul>
      ))}
    </div>
  );
};
// super component   // printer   //paper
const FormikUserForm = withFormik({
  mapPropsToValues({ name, email, password, termsofservice }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      termsofservice: termsofservice || false,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios.post("https://reqres.in/api/users/", values).then(response => {
      console.log("success", response);
      setStatus(response.data);
      resetForm();
    });
  }
})(UserForm);
export default FormikUserForm;
