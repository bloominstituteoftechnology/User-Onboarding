import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import User from "./Users";
import * as Yup from "yup";
import formSchema from "./formSchema";
import axios from "axios";
import { Card, Header, BodyContainer, FormContainer } from "./Styles";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  role: "",
  terms: false,
};

const initialUserList = [];

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  role: "",
  terms: "",
};

const initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [userList, setUsers] = useState(initialUserList);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    Yup.reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      password: formValues.password.trim(),
      terms: formValues.terms,
    };

    postNewUser(newUser);
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([...userList, res.data]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Post error:", err);
      })
      .finally(() => {
        console.log("userList:", userList);
        setFormValues(initialFormValues);
      });
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <BodyContainer>
      <Header>
        <h1>Sign Up App!</h1>
      </Header>
      <FormContainer>
        <Form
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          errors={formErrors}
          disabled={disabled}
        />
      </FormContainer>

      {userList.map((user) => {
        return <User key={user.id} details={user} />;
      })}
    </BodyContainer>
  );
}

export default App;
