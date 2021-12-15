import React from "react";

export default function UserForm(props) {
    const { values, change, submit } = props;

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div>
        <h2>Add New User</h2>
        {/**DISABLE BUTTON IF NEEDED */}
        

        <div className="form-input">
          <label>
            First Name:
            <input
              value={values.first_name}
              onChange={change}
              name="first_name"
              type="text"
            />
          </label>
          <label>
            Last Name:
            <input
              value={values.last_name}
              onChange={change}
              name="last_name"
              type="text"
            />
          </label>
          <label>Email:
            <input 
              value={values.email}
              onChange={change}
              name='email'
              type='email'
            />
          </label>
          <label>Password: (8 characters minimum)
            <input 
              type='password'
              name='password'
              onChange={change}
            />
          </label>
          <label>Do you agree to the terms?
            <input 
              type='checkbox'
              name='terms'
              checked={values.terms}
              onChange={change}
            />
          </label>

          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
