import React from "react";

const Form = () => {
  return (
    <form className="formBox">
      <div className="form-inputs">
        <h3> Alien Initiation </h3>
        <label>
          {" "}
          Username
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            text="text"
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
            value={password}
            onChange={onChange}
            name="password"
            minLength="8"
            required
          />
        </label>

        <label>
          Terms of Service
          <input
            type="checkbox"
            checked={values[terms - of - service]}
            onChange={onChange}
            name="terms-of-of-service"
          />
        </label>
      </div>
    </form>
  );
};

export default Form;
