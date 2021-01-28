import React from 'react';

export default function Form (props) {

  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
    // console.log(name);
  };

  console.log(values);

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Register user</h2>
        {/* {console.log(typeof(disabled))} */}
        <button disabled={disabled}>submit</button>
        {/* TODO: MORE ERRORS */}
        <div className="errors">
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>

          <div>{errors.email}</div>
        </div>
      </div>
      <div className="form-group inputs">
        <h4>Information</h4>
        <label>First Name&nbsp;
          <input
            value={values.first_name}
            onChange={onChange}
            name="first_name"
            type="text" 
          />
        </label>
        <label>Last Name&nbsp;
          <input
            value={values.last_name}
            onChange={onChange}
            name="last_name"
            type="text" 
          />
        </label>
        <label>Email&nbsp;
          <input 
            value={values.email}
            onChange={onChange}
            name="email"
            type="email"
          />
        </label>
        <label>Password&nbsp;
          <input 
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>
        <p>
          <label>
            <input 
              type="checkbox"
              name="tosAgree"
              checked={values.tosAgree}
              onChange={onChange}
            />
            I agree to the Terms of Service
          </label>
        </p>
      </div>
        

    </form>
  )
}