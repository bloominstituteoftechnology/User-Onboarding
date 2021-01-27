import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onChange = (evt) => {
    const { type, name, value, checked } = evt.target;
    console.log(evt.target);
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="form-container">
      <header>
        <h1>Advanced Form</h1>
      </header>
      <div>
        <label>
          Username:&nbsp;
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={onChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </label>

        <label>
          Password:
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={onChange}
          />
        </label>

        <label>
          Terms of Service:
          <input
            type="checkbox"
            name="terms"
            value={values.terms}
            onChange={onChange}
          />
        </label>
        <button>Submit</button>
      </div>
    </form>
  );
}
