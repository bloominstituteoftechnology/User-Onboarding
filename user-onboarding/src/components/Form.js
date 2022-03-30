import React, {useState, useEffect} from "react";

const Form = props => {
  const { change, submit, errors } = props;
  const { username, email, password, tos } = props.values;

  const onChange = (event) => {
    const {name, value, checked, type } = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  }

  return (
    <div>
       <h1>Johnny is a one of a kind guy</h1>
       <div>{errors.username}</div>
       <div>{errors.email}</div>
       <div>{errors.password}</div>
       <div>{errors.tos}</div>

      <form onSubmit={onSubmit}>
        <label> 
          Name:
          <input 
            type="text"
            name="username" 
            value={username}
            onChange={onChange}
            placeholder="Name"
          />
        </label>
        <label> 
          Email:
          <input 
            type="email"
            name="email" 
            value={email}
            onChange={onChange}
            placeholder="Email"
          />
        </label>
        <label>
          Password:
          <input 
          type="password"
          name="password" 
          value={password}
          onChange={onChange}
          placeholder="Password"
        />
        </label>
        <label> 
          Terms of Service:
          <input 
            type="checkbox" 
            name="tos"
            checked={tos} 
            onChange={onChange}
          />
          </label>
          <input type="submit" value="Create User" />
      </form>
    </div>
  )
}

export default Form;