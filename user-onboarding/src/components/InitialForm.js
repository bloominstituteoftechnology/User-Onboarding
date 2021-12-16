import React from "react";

export default function InitialForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group">
        <h2>Add a user</h2>
        <div className="form-group inputs">
          <label>
            firstName
            <input
              value={values.firstName}
              onChange={onChange}
              name="firstName"
              type="text"
            />
          </label>
          <label>
            lastName
            <input
              value={values.lastName}
              onChange={onChange}
              name="lastName"
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
        </div>
        <div className="form-group checkboxes">
          <label>
            I agree to the terms of service
            <input
              type="checkbox"
              name="service"
              checked={values.service}
              onChange={onChange}
            />
          </label>
        </div>
        <button disabled={disabled}>Create an account</button>
        <div className="errors">
          <div>{errors.firstName}</div>
          <div>{errors.lastName}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.service}</div>
        </div>
      </div>
    </form>
  );
}
