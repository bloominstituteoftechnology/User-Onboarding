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
  const [errors, setErrors] = useState(initialState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formState, setFormState] = useState(initialState);

  const schema = yup.object().shape({
    name: yup.string().required("Name is a required field!"),
    email: yup.string().email().required("Email is a required field!"),
    password: yup.string().required("Password is a required field"),
    goals: yup.string().required("Have some ambition!"),
    role: yup.string(),
    terms: yup.bool().oneOf([true], "You must accept terms..."),
  });

  const validateInput = (e) => {
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log("error: ", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  useEffect(() => {
    schema.isValid(formState).then((valid) => {
      console.log(formState);
      console.log("valid? ", valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  console.log("error state: ", errors);

  const submitForm = (e) => {
    e.preventDefault();
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateInput(e);
    setFormState(newFormData);
  };

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
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          valeu={formState.email}
          onChange={inputChange}
        />
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </label>
      <label htmlFor="name">
        Password
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={inputChange}
        />
        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </label>
      <label htmlFor="name">
        What are your career goals?
        <textarea name="goals" value={formState.goals} onChange={inputChange} />
        {errors.goals.length > 0 ? (
          <p className="error">{errors.goals}</p>
        ) : null}
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
