import React from 'react';

const Form = (props) => {
  const {   change, submit, errors  } = props;
  const {username, email, password, tos} = props.values;

  const onChange = (event) => {
    const {name, value, checked, type} = event.target;
    const newVal = type === 'checkbox' ? checked : value;
    change(name, newVal);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  }
  return (
    <div className="Form">
      <p>{errors.username}</p>
      <p>{errors.password}</p>
      <p>{errors.email}</p>
      <p>{errors.tos}</p>
      <form onSubmit={submit}>
        <label>
          Name:
          <input 
            type='text' 
            name='username' 
            value={username}
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <input 
            type='email' 
            name='email' 
            value={email}
            onChange={onChange}
          />
        </label>
        <label>
          Password:
          <input 
              type='password' 
              name='password' 
              value={password}
              onChange={onChange}
          />
        </label>
        <label>
          Terms of Service:
          <input 
            type='checkbox'
            name='tos'
            checked={tos}
            onChange={onChange}
          />
        </label>
        <input type='submit' />
      </form>
    </div>
  );
}

export default Form;
