//Create a component file called Form.js, import it into your App.js file, and place the component in your JSX there.

import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  //prevent the submit button from allowing an empty form to be submitted.
  const onSubmit = (event) => {
    event.preventDevfault();
    submit();
  };

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>User Onboarding</h2>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>Information</h4>

        {/* ////////// TEXT INPUTS ////////// */}

        <label>
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <label>
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>

        {/* ////////// CHECKBOXES ////////// */}
        <label>
          Terms of Service
          <input
            type="checkbox"
            name="terms"
            onChange={onChange}
            checked={values.terms}
          />
        </label>
      </div>
      <button disabled={disabled}>submit</button>
    </form>
  );
}
