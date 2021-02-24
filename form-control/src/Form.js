import React from "react";
import { useState, useEffect } from "react";
import { userSchema } from "./Validations/UserValidation";
import * as yup from "yup";

const Form = ({ addUser }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    favDog: "",
    tos: false,
  });

  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    tos: "",
  });

  const submitHandler = (evt) => {
    evt.preventDefault();
    addUser(form);
    setForm({
      name: "",
      email: "",
      password: "",
      favDog: "",
      tos: false,
    });
  };

  useEffect(() => {
    userSchema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  const changeHandler = (evt) => {
    const { name, value, type, checked } = evt.target;
    const realVal = type === "checkbox" ? checked : value;
    yup
      .reach(userSchema, name)
      .validate(realVal)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setForm({ ...form, [name]: realVal });
  };

  return (
    <div>
      <h1> Controlled Form</h1>
      <div style={{ color: "red" }}>
        {" "}
        {disabled ? "Form is not ready to submit. See errors below" : ""}
        <div>{formErrors.name}</div>
        <div>{formErrors.email}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.tos}</div>
      </div>
      <form onSubmit={submitHandler}>
        <label>
          {" "}
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={changeHandler}
            placeholder="name"
          />
        </label>
        <label>
          {" "}
          Email
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            value={form.email}
            placeholder="email"
          />
        </label>
        <label>
          {" "}
          Favorite Dog
          <select value={form.favDog} onChange={changeHandler} name="favDog">
            <option value="0">Select a doggo if you like doggos</option>
            <option value="1">Lab</option>
            <option value="2">Poodle</option>
            <option value="3">Bulldog</option>
          </select>
        </label>
        <label>
          {" "}
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
            placeholder="PW"
          />
        </label>
        <label>
          {" "}
          Agree to ToS
          <input
            type="checkbox"
            name="tos"
            checked={form.tos}
            onChange={changeHandler}
          />
        </label>
        <input type="submit" onSubmit={submitHandler} disabled={disabled} />
      </form>
    </div>
  );
};

export default Form;
