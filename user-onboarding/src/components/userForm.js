import React from "react";

export default function UserForm(props) {
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
    <form className='form container' onSubmit={onSubmit}>
      <div className='form inputs'>
        <div className='name'>
          <div className='errors'>
            <div>{errors.firstName}</div>
            <div>{errors.lastName}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
          </div>
          <label>
            First Name:
            <input
              type='text'
              name='firstName'
              value={values.firstName}
              onChange={onChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type='text'
              name='lastName'
              value={values.lastName}
              onChange={onChange}
            />
          </label>
        </div>
        <div className='email'>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={values.email}
              onChange={onChange}
            />
          </label>
        </div>
        <div className='password'>
          <label>
            Password:
            <input
              type='password'
              name='password'
              value={values.password}
              onChange={onChange}
            />
          </label>
        </div>
        <div className='termsOfService'>
          <label>
            Terms of Service:
            <input
              type='checkbox'
              name='termsOfService'
              value={values.termsOfService}
              onChange={onChange}
            />
          </label>
          <label>
            <div className='button'>
              <button id='submitButton' disabled={disabled}>
                S U B M I T
              </button>
            </div>
          </label>
        </div>
      </div>
    </form>
  );
}
