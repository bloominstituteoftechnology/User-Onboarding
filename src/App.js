import "./App.css";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "./Schema/schema";
import axios from "axios";
import styled from "styled-components";
const emptyFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
  level: "",
};
const emptyErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
  level: "",
};

function App() {
  const [formValues, setFormValues] = useState(emptyFormValues);
  const [errors, setErrors] = useState(emptyErrors);

  const [newUser, setNewUser] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (evt) => {
    axios
      .post("https://reqres.in/api/users", formValues)
      .then(
        (res) => setNewUser([res.data, ...newUser]),
        setFormValues(emptyFormValues)
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  return (
    <div className="App">
      <Form
        values={formValues}
        change={handleChange}
        errors={errors}
        submit={handleSubmit}
        disabled={buttonDisabled}
      />
      <section>
        <h1
          style={{
            fontFamily: "fantasy",
            fontSize: "35px",
            textDecoration: "underline",
          }}
        >
          User Wall
        </h1>
        <div className="userWrapper">
          {newUser.map((user, idx) => {
            return (
              <div key={idx} className="users">
                <h2>Name: {user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Coding Level: {user.level}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
