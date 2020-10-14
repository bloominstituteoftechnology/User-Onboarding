import React from "react";
import "../App.css"

const OnboardForm = (props) => {
  const { values, change, submit, disabled, errors } = props;

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>
          Name
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>
        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='email'
          />
        </label>
        <label>
          Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>
        <label>
          I accept the Terms Of Service.
          <input
            value='{values.tos}'
            onChange={onChange}
            name='tos'
            type='checkbox'
            checked={values.tos}
          />
          <span class='checkmark'></span>
        </label>
      </div>
      <button className='submit' disabled={disabled}>
        Submit
      </button>
      <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
      </div>
    </form>
  );
};

export default OnboardForm;
