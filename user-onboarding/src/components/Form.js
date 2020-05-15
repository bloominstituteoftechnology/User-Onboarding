import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { css, cx } from "emotion";
import UsersList from "./UsersList";
import Loader from "react-loader-spinner";
import UserCard from "./UserCard";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState([]);
  const initialState = {
    name: "",
    email: "",
    password: "",
    goals: "",
    role: "engineer",
    // checked: false,
  };

  const [errors, setErrors] = useState(initialState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formState, setFormState] = useState(initialState);
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState({});
  const [isEditing, setIsEditing] = useState(false);

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
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  useEffect(() => {
    schema.isValid(formState).then((valid) => {
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  const submitForm = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setPost([response.data]);
        setUsers([...users, response.data]);
        setFormState(initialState);
      })
      .then(setIsLoading(false))
      .catch((err) => console.log(err.response));
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    console.log({ newFormData });
    validateInput(e);
    setFormState(newFormData);
  };

  const setUserForEditing = (user) => {
    setIsEditing(true);
    setFormState(user);
  };

  const editUser = (event) => {
    event.preventDefault();
    let newUsers = [...users];
    if (isEditing) {
      const index = users.findIndex((user) => user.id === formState.id);
      newUsers[index] = formState;
      setUsers(newUsers);
      setFormState(initialState);
      setUserToEdit(initialState);
      // console.log({ newUsers });
    }
    setIsEditing(false);
  };

  const deleteUser = (user) => {
    return setUsers(users.filter((u) => u.id !== user.id));
  };

  return (
    <div
      className="main"
      className={css`
        display: flex;
      `}
    >
      <form
        onSubmit={isEditing ? editUser : submitForm}
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
            cy-data="name"
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
            cy-data="email"
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
            // value={formState.checked}
            type="checkbox"
            name="terms"
            checked={formState.terms}
            onChange={inputChange}
          />
          Terms & Conditions
        </label>
        {isLoading ? (
          <Loader />
        ) : post.length > 0 ? (
          <pre>{JSON.stringify(post, null, 2)}</pre>
        ) : null}
        <button type="submit" disabled={isButtonDisabled}>
          {isEditing ? "Update User" : "Submit"}
        </button>
      </form>
      <UsersList
        deleteUser={deleteUser}
        setUserForEditing={setUserForEditing}
        users={users}
      />
    </div>
  );
};

export default Form;
