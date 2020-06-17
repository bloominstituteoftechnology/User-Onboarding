import React from "react";

export default function Form(props) {
  const { values, onInputChange, onCheckboxChange, onSubmit, errors } = props;

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

      <div>
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
          Terms of Service&nbsp;
          <input
            value={values.terms}
            onChange={onCheckboxChange}
            name="terms"
            type="checkbox"
          />
        </label>
        <br />
      </div>
      <button>Sign Up!</button>
    </form>
  );
}
