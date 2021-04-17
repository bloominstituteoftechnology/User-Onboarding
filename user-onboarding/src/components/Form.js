/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  tosCheck: false,
};

const Form = (props) => {
  const { submit } = props;

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    console.groupCollapsed("handleChange(name, value, type, checked)");
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    const val = type === "checkbox" ? checked : value;
    setFormData([name], val);
    console.groupEnd();
  };

  const handleSubmit = () => {
    submit(formData);
  };

  return (
    <form action="submit" id="form">
      <label htmlFor="name">
        Enter your name
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="name"
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
          placeholder="password"
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
      <button action="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
