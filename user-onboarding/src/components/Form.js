import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  terms: yup.boolean().oneOf([true], "Please agree to terms of use"),
  password: yup
    .string()
    .required("Please create a password")
    .min(5, "Password must be at least 5 characters long"),
  roles: yup.string(),
});

function Form() {
  //managing state for form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
    roles: "",
  });

  //state for errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
    roles: "",
  });

  //Users state for post requests
  const [users, setUsers] = useState([]);

  //submit button state
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (event) => {
    event.preventDefault();
    axios
      .post(" https://reqres.in/api/users", formState)
      .then((response) => {
        setUsers(response.data);
        console.log("received data", users);

        setFormState({
          name: "",
          email: "",
          password: "",
          terms: "",
          roles: "",
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (event) => {
    event.persist();
    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    };
    validateChange(event);
    setFormState(newFormData);
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label>

      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          name="email"
          value={formState.email}
          onChange={inputChange}
        />
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </label>

      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={inputChange}
        />
        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </label>

      <label htmlFor="terms" className="terms">
        {" "}
        Terms and Conditions
        <input
          type="checkbox"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
      </label>

      <label htmlFor="roles">
        Roles
        <select id="roles" name="roles" onChange={inputChange}>
          <option value="web-developer">Web Developer</option>
          <option value="ios-developer">iOS Developer</option>
          <option value="UX Designer">UX Designer</option>
          <option value="Intern">Intern</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Jeff Bezos Vest">Jeff Bezos' Vest</option>
        </select>
      </label>

      <button disabled={buttonDisabled}>Submit</button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </form>
  );
}

export default Form;
