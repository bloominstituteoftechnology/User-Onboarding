import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Styled from "styled-components";
import './Form.css';

const Div = Styled.div`
background-color: #095ba7;
height: 400px;
width: 700px;
margin-left: 250px;
border: 3px solid #34495e;
border-radius: 5%;
`;

function OnBoardForm({ values, errors, touched, status }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
    <Div>
      <Form>
        
          <Field  className = "form" type="text" name="name" placeholder="name" />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
          <Field  className = "form"  type="Email" name="email" placeholder="email" />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
          <Field   className = "form"  type="password" name="password" placeholder="password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <Field type="checkbox" name="checkbox" checked={values.checkbox} />
        
        <button type="submit">Submit!</button>
      </Form>
      {users.map(user => (
        <ul key={user.id}>
          <li>name: {user.name}</li>
          <li>email: {user.email}</li>
          <li>password: {user.password}</li>
        </ul>
      ))}
    </Div>
  );
}

const FormikOnBoardForm = withFormik({
  mapPropsToValues({ name, email, password, checkbox }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      checkbox: checkbox || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("You must put a name"),
    email: Yup.string().required("You must put a email"),
    password: Yup.string().required("You must enter password")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post(" https://reqres.in/api/users", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(OnBoardForm);

export default FormikOnBoardForm;
