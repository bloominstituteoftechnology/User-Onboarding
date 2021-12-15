import React from "react";

export default function Form({ user, change, submit, disabled }) {
  const handleChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueProvided = "checkbox" === type ? checked : value;
    change(name, valueProvided);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={user.first_Name}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={user.first_Name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Check, if you agree to Terms of Service
          <input
            type="checkbox"
            name="termsOfService"
            checked={user.termsOfService}
            onChange={handleChange}
          />
        </label>
      </form>
      <button disabled={disabled}>Submit</button>
    </div>
  );
}
