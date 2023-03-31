import React from "react";

function Form(props) {
  const { change, submit, errors } = props;
  const { name, email, password, terms } = props.values;

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    change(name, updatedValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };
  return (
    <div>
      <div className="errors" style={{ color: "red", fontStyle: "bold" }}>
        <p>{errors.name}</p>
        <p>{errors.password}</p>
        <p>{errors.email}</p>
        <p>{errors.terms}</p>
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={onChange}
        />
        <label htmlFor="name"> Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={onChange}
        />
        <label htmlFor="password"> Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={onChange}
        />
        <label>
          {" "}
          Do you accept the terms of service
          <input
            type="checkbox"
            checked={terms}
            name="terms"
            onChange={onChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
