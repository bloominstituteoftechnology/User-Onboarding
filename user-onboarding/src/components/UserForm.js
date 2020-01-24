import React, {useState, useEffect} from 'react'
import {withFormik, Form, Field} from 'formik';
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ errors, touched, values, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);


  return (
    <div className="user-form">
      <h1>User Form</h1>
      <Form>
        <Field 
          id="name"
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
        />
        {touched.name && errors.name && <p>{errors.species}</p>}

        <Field 
          id="email"
          type="text"
          name="email"
          placeholder="email"
          value={values.email}
        />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <Field 
          id="password"
          type="text"
          name="password"
          placeholder="password"
          value={values.password}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <label>
          Terms of Service
          <Field id="service" type="checkbox" name="service" value={values.service} />
        </label>

        <button type="submit">Submit</button>
      </Form>

      {users.map(users => (
        <ul>
          <li>Name: {users.name}</li>
          <li>Email: {users.email}</li>
          <li>Password: {users.password}</li>
        </ul>
      ))}
    </div>
  );
};


const FormikUserForm = withFormik({
  mapPropsToValues({name, email, password, service }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      service: service || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please fill this in!"),
    email: Yup.string().required("Please fill this in!"),
    password: Yup.string().required("Please fill this in!"),
    servie: Yup.bool()
  }),

  handleSubmit(values, {setStatus, resetForm}) {
    console.log("Submitting form:", values);
  

  axios
    .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log("Success:", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => {
        console.log("Error:", err.response);
      });
  }
})(UserForm);

export default FormikUserForm;