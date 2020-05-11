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
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
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
    email: yup.string().email().required("Email is a required field!"),
    password: yup.string().required("Password is a required field"),
    goals: yup.string().required("Have some ambition!"),
    role: yup.string(),
    terms: yup.bool().oneOf([true], "You must accept terms..."),
  });

  useEffect(() => {
    schema.isValid(formState).then((valid) => {
      console.log(formState);
      console.log("valid? ", valid);
      setIsButtonDisabled(!valid);
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
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          valeu={formState.email}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="name">
        Password
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="name">
        What are your career goals?
        <textarea name="goals" value={formState.goals} onChange={inputChange} />
      </label>
      <label htmlFor="role">
        What role do you currently have?
        <select name="role" value={formState.role} onChange={inputChange}>
          <option value="engineer">Engineer</option>
          <option value="manager">Manager</option>
          <option value="operations">Operations</option>
          <option value="finance">Finance</option>
        </select>
      </label>
      <label htmlFor="terms">
        <input
          value={formState.terms}
          type="checkbox"
          name="terms"
          checked={formState.checked}
          onChange={inputChange}
        />
        Terms & Conditions
      </label>

      <button type="submit" disabled={isButtonDisabled}>
        Submit
      </button>
    </form>
  );
};

export default Form;
