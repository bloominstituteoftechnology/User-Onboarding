import React from 'react';


function Form(props) {
  const { onChange, onSubmit, values, errors, disabled } = props;

  const submit = event => {
    event.preventDefault();
    onSubmit()
  }

  const change = event => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === 'checkbox' ? checked: value;
    onChange(name, valueToUse);
  }

  return (
    <div>
      <div>{errors.name}</div>
      <div>{errors.email}</div>
      <div>{errors.password}</div>
      <form onSubmit={submit}>
        <label>Name
          <input
          type="text"
          name="name"
          onChange={change}
          value={values.name}
          />
        </label>
        <br/>
        <label>Email
          <input
          type="email"
          name="email"
          onChange={change}
          value={values.email}
          />
        </label>
        <br/>
        <label>Password
          <input
          type="password"
          name="password"
          onChange={change}
          value={values.password}
          />
        </label>
        <br/>
        <label>Gimme all your data
          <input
          type="checkbox"
          name="terms"
          onChange={change}
          checked={values.terms}
          />
        </label>
        <br/>
        <br/>
        <button disabled={disabled}>Submit New Member</button>
      </form>
    </div>
  )
}

export default Form
