import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { Card } from "semantic-ui-react";

const FormStyle = styled.div`
  body {
    width: 100%;
    height: 100%;
    margin-top: 10%;
    transform: translateY(-20%);
    position: absolute;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .form-container {
    margin: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-size: cover;
    justify-content: center;
  }
  form {
    display: flex;
    max-width: 50%;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 30px;
    border-radius: 5px;
  }
  h2 {
    font-family: "Serif ", "Georgia ";
    text-shadow: 0 0 1px #1ab31a; 0 0 2px #1ab31a;
  }
  input {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 4%;
    font-family: 'Serif ', 'Georgia ';
    margin: 5px 0;
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #282c34;
    padding: 10px;
    color: "white";
    width: 80%;
  }
  label{
   
    font-style: italic;
    background: lightgray;
    text-shadow: 0 0 1px #282c34; 0 0 2px #1ab31a;
    margin-top: 10px;
    padding: 5px;
  }

  button {
    background: #282c34;
    text-align: center;
    padding: 5px;
    margin-top: 10px;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

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
      <FormStyle>
        <Form>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}

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

          <label>
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
      </FormStyle>

      {users.map(user => (
        <Card>
          <div className="ui cards">
            <div class="card">
              <div class="content">
                <div class="header" key={user.id}>
                  {user.name}
                </div>
                <div class="meta" key={user.id}>
                  {user.email}
                </div>
              </div>
            </div>
          </div>
        </Card>
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
