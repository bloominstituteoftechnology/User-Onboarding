import React from "react";

function Form({ values, change, submit, error }) {
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    change(name, newValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
          />
        </label>
      </div>

      <div>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            onChange={onChange}
            value={values.email}
          />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password
          <input
            type="text"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </label>
      </div>

      <div>
        <label htmlFor="terms">
          Terms of Service
          <input type="checkbox" name="terms" onChange={onChange} />
        </label>
      </div>

      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
