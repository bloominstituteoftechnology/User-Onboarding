import React from "react";
import "./Form.css";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUSe = type === "checkbox" ? checked : value;
    change(name, valueToUSe);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
      </div>

      <div className="form">
        <h4>Sign up</h4>

        <label>
          Username:
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
            placeholder="username"
          />
        </label>

        <label>
          Email:
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
            placeholder="email"
          />
        </label>

        <label>
          Password:
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="text"
            placeholder="password"
          />
        </label>
        <label>
          Read and Agree with our terms of service?
          <input
            type="checkbox"
            name="read"
            checked={values.read}
            onChange={onChange}

          />
        </label>
        <button id="submit"  disabled={disabled}>submit</button>
      </div>

  
    </form>
  );
}
