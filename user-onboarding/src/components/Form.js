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
  role: "",
};
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  tosCheck: "",
  role: "",
};

const Form = (props) => {
  const { submit } = props;

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const roles = [
    "Project Manager",
    "Requirement Analyst",
    "UI/UX Designer",
    "QA Engineer",
    "Web Developer",
  ];

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
    <form className="col s12" action="submit" id="form">
      <div className="row">
        <div className="input-field col s6">
          <input
            id="name"
            type="text"
            className="validate"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field col s6">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            className="validate"
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input
            id="password"
            name="password"
            type="password"
            className="validate"
            value={formData.password}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="input-field col s6">
          <select id="role" name={"role"} onChange={handleChange}>
            <option value="">Select a role</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input
            id="tosCheck"
            type="checkbox"
            name="tosCheck"
            checked={formData.tosCheck}
            onChange={handleChange}
            className={formData.tosCheck ? "filled-in" : "unChecked"}
          />
          <small>
            I have read and agree to the{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms of Service
            </a>
          </small>
        </div>
        <div className="input-field col s6">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="submit"
            action="submit"
            onClick={handleSubmit}
            disabled={disabled}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>

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
