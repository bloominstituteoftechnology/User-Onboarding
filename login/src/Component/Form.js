import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Styled from "styled-components";
import "./Form.css";

const Div = Styled.div`
background-color: #14A39A;
height: 700px;
width: 700px;
margin-left: 250px;
border: 3px solid #34495e;
border-radius: 5%;
margin-top:30px;
`;

const Item = Styled.div`

`
const Button = Styled.button`

margin-top:20px;
height: 40px;
width: 150px;
border-radius: 20%;
background-color:#008000;
color:white;
border: 3px solid #34495e;
`

const H1 = Styled.h1`

color:white;
`


function OnBoardForm({ values, errors, touched, status }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
    <Div>
        <H1>StudentForm</H1>
      <Form>
        <Item>
          <Field className="form" type="text" name="name" placeholder="name" />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </Item>
        <Item>
          <Field
            className="form"
            type="Email"
            name="email"
            placeholder="email"
          />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </Item>
        <Item>
          <Field
            className="form"
            type="password"
            name="password"
            placeholder="password"
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </Item>
        <Item>
        <Field component="select" className="subjectSelect" name="subjectSelect">
          <option>Please Choose an Option</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Optional Math">Optional Math</option>
          <option value="English">English</option>
        </Field>
        {touched.food && errors.food && <p className="error">{errors.food}</p>}
        </Item>
        <Item>
        <Field  className="checkbox" type="checkbox" name="checkbox" checked={values.checkbox} />
        </Item>
        <Button type="submit">Submit!</Button>
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
  mapPropsToValues({ name, email, password,subjectSelect, checkbox }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      subjectSelect:subjectSelect||"",
      checkbox: checkbox || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required!"),
    email: Yup.string().required("Required!"),
    password: Yup.string().required("Required!")
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
