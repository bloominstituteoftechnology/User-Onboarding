import axios from "axios";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import Users from "./Users";

const defaultValue = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const initialUsers = [];

function Form() {
  const [formState, setFormState] = useState(defaultValue);
  const [errors, setErrors] = useState({ ...defaultValue, terms: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [users, setUsers] = useState(initialUsers);

  let formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Password must be at least 6 characters long"),

    terms: yup.boolean().oneOf([true], "Please agree to the Terms of Service"),
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => setButtonDisabled(!valid));
  }, [formState, formSchema]);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    axios
      .post("https://reqres.in/api/users", formState)
      .then(() => {
        setUsers([[formState, ...users]]);
        setFormState(defaultValue);
      })
      .catch((err) => console.log(err));
  };

  const validateChange = (e) => {
    e.persist();
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) =>
        setErrors({
          ...errors,
          [e.target.name]: "",
        })
      )
      .catch((error) =>
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0],
        })
      );
  };

  const inputChange = (e) => {
    // ternary operator to determine the form value
    const newValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: newValue,
    });
    validateChange(e);
  };

  return (
    <form onSubmit={formSubmit}>
      <Users
        type="text"
        name="name"
        onChange={inputChange}
        value={formState.name}
        errors={errors}
        label="Name: "
      />
      <Users
        type="text"
        name="email"
        onChange={inputChange}
        value={formState.email}
        errors={errors}
        label="Email: "
      />
      <Users
        type="text"
        name="password"
        onChange={inputChange}
        value={formState.password}
        errors={errors}
        label="Password: "
      />
      <Users
        type="checkbox"
        name="terms"
        onChange={inputChange}
        label="Terms of Service"
        value={formState.terms}
        errors={errors}
      />
      <div>
        <button disabled={buttonDisabled}>Submit</button>
      </div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </form>
  );
}

export default Form;
