import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { css, cx } from "emotion";
import UsersList from "./UsersList";

const Form = () => {
  const [post, setPost] = useState([]);
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
  const [users, setUsers] = useState([]);

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
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setPost([response.data]);
        setUsers([...users, response.data]);
        setFormState(initialState);
      })
      .catch((err) => console.log(err.response));
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
    <div
      className="main"
      className={css`
        display: flex;
      `}
    >
      <form
        onSubmit={submitForm}
        className={css`
          width: 40%;
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
          {errors.name.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={inputChange}
          />
          {formState.email === "waffles@syrup.com" ? (
            <p className="error">That email is already taken</p>
          ) : errors.email.length > 0 ? (
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
          <textarea
            name="goals"
            value={formState.goals}
            onChange={inputChange}
          />
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
        {
          // console.log("post.length: ", post.length)
          post.length > 0 ? <pre>{JSON.stringify(post, null, 2)}</pre> : null
        }
        <button type="submit" disabled={isButtonDisabled}>
          Submit
        </button>
      </form>
      <UsersList users={users} />
    </div>
  );
};

export default Form;
