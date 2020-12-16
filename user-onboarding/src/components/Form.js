import React, { useState } from 'react';


function Form(props) {
  const { onChange, onSubmit, values } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Name
          <input
          type="text"
          name="name"
          onChange={onChange}
          value={values.name}
          />
        </label>
        <br/>
        <label>Email
          <input
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
          />
        </label>
        <br/>
        <label>Password
          <input
          type="password"
          name="password"
          onChange={onChange}
          value={values.password}
          />
        </label>
        <br/>
        <label>Gimme all your data
          <input
          type="checkbox"
          name="terms"
          onChange={onChange}
          checked={values.terms}
          />
        </label>
        <br/>
        <br/>
        <button>Submit New Member</button>
      </form>
    </div>
  )
}

export default Form
