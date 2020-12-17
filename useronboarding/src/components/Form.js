import React from "react";

export default function FriendForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const correctValue = type === "checkbox" ? checked : value;
    change(name, correctValue);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a Friend</h2>

        <button disabled={disabled}>submit</button>

        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>General information</h4>
        <label>
          Username
          <input
            value={values.first_name}
            onChange={onChange}
            name="first_name"
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
            name='password'
            type='text'
            />
        </label>
        <label>
            Terms of Service
            <input
            type='checkbox'
            name='terms'
            checked={values.terms}
            onChange={onChange}
            />
        </label>
       </div>
    </form>
  );
} 