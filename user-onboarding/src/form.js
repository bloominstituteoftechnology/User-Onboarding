import React from "react";

export default function UserForm(props) {
    const { values, change, submit, errors, disabled } = props;

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div>
        <h2>Add New User</h2>
        {/**DISABLE BUTTON IF NEEDED */}
        <button disabled={disabled}>Submit</button>
        <div className='errors'>
            <div>{errors.first_name}</div>
            <div>{errors.last_name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
        </div>

        <div className="form-input">
          <label>
            First Name:
            <input
              value={values.first_name}
              onChange={onChange}
              name="first_name"
              type="text"
            />
          </label>
          <label>
            Last Name:
            <input
              value={values.last_name}
              onChange={onChange}
              name="last_name"
              type="text"
            />
          </label>
          <label>Email:
            <input 
              value={values.email}
              onChange={onChange}
              name='email'
              type='email'
            />
          </label>
          <label>Password: (8 characters minimum)
            <input 
              type='password'
              name='password'
              onChange={onChange}
            />
          </label>
          <label>Do you agree to the terms?
            <input 
              type='checkbox'
              name='terms'
              checked={values.terms}
              onChange={onChange}
            />
          </label>


        </div>
      </div>
    </form>
  );
}
