import React, {useState, useEffect} from 'react'
import {withFormik, Form, Field} from 'formik';
import './Forms.css';
import * as Yup from "yup";
import axios from "axios";

const Forms = ({ errors, touched, values, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);


  return (
    <div className="user-form">
      <h1>User Login</h1>
      <Form>
        <Field 
          id="name"
          type="text"
          name="name"
          placeholder="name" 
        />
        {touched.name && errors.name && <p>{errors.name}</p>}

        <Field 
          id="email"
          type="text"
          name="email"
          placeholder="email" 
        />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <Field 
          id="password"
          type="password"
          name="password" 
          placeholder="Password:" 
          />
          {touched.password && errors.password && <p>{errors.password}</p>}

          <Field as="select" className="role-select" name="role">
          <option value>Choose a Role</option>
          <option value="Front-End">Front End</option>
          <option value="Back-End">Back End</option>
          <option value="Data-Science">Data Science</option>
        </Field>

          <label>Terms Of Service
          <Field
            id="TermsOfService"
            type="checkbox"
            name="TermsOfService"
          />
        </label>
        <button type="submit">Submit</button>
      </Form>

      {users.map(users => (
        <ul>
          <li>Name: {users.name}</li>
          <li>Email: {users.email}</li>
          <li>Password: {users.password}</li>
          <li>Role: {users.role}</li>
        </ul>
      ))}
    </div>
  );
};


const FormikForms = withFormik({
  mapPropsToValues({name, email, password, role, service }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      role: role || "",
      service: service || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(" Fill In Name!"),
    email: Yup.string().email().required(" Fill In Email!"),
    password: Yup.string().required(" Fill In Password!"),
    role: Yup.string().required(" Fill In Role!"),
    servie: Yup.bool()
  }),

  handleSubmit(values, {setStatus, resetForm}) {
    


  axios
    .post(" https://reqres.in/api/users", values)
      .then(response => {
        setStatus(response.data);
        resetForm();
      })
      .catch(err => {
        console.log("Error:", err.response);
      });
  }
})(Forms);

export default FormikForms; 