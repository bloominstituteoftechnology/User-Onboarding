import React from "react";
import { FormSubDiv } from "./Styles";

export default function Form(props) {
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    errors,
    disabled,
  } = props;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Sign Up!</h2>
      </div>

      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>
      </div>

      <label>
        Name&nbsp;
        <input
          value={values.name}
          onChange={onInputChange}
          name="name"
          type="text"
        />
      </label>
      <br />

      <label>
        Email&nbsp;
        <input
          value={values.email}
          onChange={onInputChange}
          name="email"
          type="text"
        />
      </label>
      <br />

      <label>
        Password&nbsp;
        <input
          value={values.password}
          onChange={onInputChange}
          name="password"
          type="password"
        />
      </label>
      <br />

      <label>
        Role:&nbsp;
        <select name="role" value={values.role} onChange={onInputChange}>
          <option value=""></option>
          <option value="Instructor">Instructor</option>
          <option value="Team Lead">Team Lead</option>
          <option value="Front End Engineer">Front End Engineer</option>
          <option value="Back End Engineer">Back End Engineer</option>
        </select>
      </label>
      <br />

      <label>
        Terms of Service&nbsp;
        <input
          value={values.terms}
          onChange={onCheckboxChange}
          name="terms"
          type="checkbox"
        />
      </label>
      <br />

      <button disabled={disabled}>Sign Up!</button>
    </form>
  );
}
