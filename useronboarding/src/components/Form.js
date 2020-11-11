import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  //makes the submit function
  function onSubmit(evt) {
    evt.preventDefault();
    submit();
    window.alert("Your form has been sent!");
  }

  //makes the onCHange function
  function onChange(evt) {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  }
  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="create-account">
        <h2>Create an account</h2>
      </div>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.username}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
      </div>
      <div className="form-div inputs">
        <label>
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          ></input>
        </label>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          ></input>
        </label>

        <label>
          Username
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          ></input>
        </label>

        <label>
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          ></input>
        </label>

        <label>
          Terms Of Service
          <input
            type="checkbox"
            name="termsofservice"
            checked={values.termsofservice}
            onChange={onChange}
          ></input>
        </label>
      </div>
      <div className="submit-button">
        <button id="submitBtn" disabled={disabled}>
          submit
        </button>
      </div>
    </form>
  );
}
