import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { css, cx } from "emotion";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    goals: "",
    role: "engineer",
    terms: "",
  };

  const [errors, setErrors] = useState();

  const [formState, setFormState] = useState(initialState);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const inputChange = (e) => {
    console.log("input changed to: ", e.target.value);
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    setFormState(newFormData);
  };

  const schema = yup.object().shape({
    name: yup.string().required("Name is a required field!"),
    email: yup.string().required("Email is a required field!"),
    password: yup.string().length(6).required("Password is a required field"),
    terms: yup.bool().oneOf([true], "You must accept terms..."),
    role: yup.string(),
    goals: yup.string().required("Have some ambition!"),
  });

  useEffect(() => {
    schema.isValid(formState).then((valid) => {
      console.log("valid? ", valid);
    });
  }, [formState]);

  return (
    <form
      onSubmit={submitForm}
      className={css`
        width: 33%;
        margin: auto;
      `}
    >
      <label htmlFor="name">
        Name
        <input type="text" name="name" onChange={inputChange} />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" onChange={inputChange} />
      </label>
      <label htmlFor="name">
        Password
        <input type="password" name="password" onChange={inputChange} />
      </label>
      <label htmlFor="name">
        What are your career goals?
        <textarea name="goals" onChange={inputChange} />
      </label>
      <label htmlFor="role">
        What role do you currently have?
        <select name="role" onChange={inputChange}>
          <option value="engineer">Engineer</option>
          <option value="manager">Manager</option>
          <option value="operations">Operations</option>
          <option value="finance">Finance</option>
        </select>
      </label>
      <label htmlFor="terms">
        <input
          type="checkbox"
          name="terms"
          checked={formState.checked}
          onChange={inputChange}
        />
        Terms & Conditions
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
