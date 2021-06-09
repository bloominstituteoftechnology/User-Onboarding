/* eslint-disable jsx-a11y/anchor-is-valid */

// I chose to keep validation and form data encapsulated in the Form component for better separation of logic

import React, { useEffect, useState } from "react";
import * as yup from "yup";
import schema from "../validation/formSchema";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  tosCheck: false,
};
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  tosCheck: "",
};

const Form = (props) => {
  const { submit } = props;

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    yup
      .reach(schema, name)
      .validate(val)
      .then(() =>
        setFormErrors({
          ...formErrors,
          [name]: " ",
        })
      ) //success
      .catch((err) =>
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      ); //error
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formData);
    setFormData(initialFormData);
  };

  useEffect(() => {
    schema.isValid(formData).then((valid) => setDisabled(!valid));
  }, [formData]);

  return (
    <form action="submit" id="form">
      <label htmlFor="name">
        Enter your name
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="minimum of 2 characters"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="email">
        Enter your email
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="email"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="password">
        Create a password
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="4-8 character password"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="tosCheck">
        Accept{" "}
        <a href="#" onClick={(e) => e.preventDefault()}>
          Terms of Service
        </a>
        <input
          type="checkbox"
          name="tosCheck"
          checked={formData.tosCheck}
          onChange={handleChange}
        />
      </label>

      <button action="submit" onClick={handleSubmit} disabled={disabled}>
        Submit
      </button>

      <div className="errors">
        <div>{formErrors.name}</div>
        <div>{formErrors.email}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.tosCheck}</div>
      </div>
    </form>
  );
};

export default Form;
