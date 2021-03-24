import React from 'react'

export default function form(props) {
    return (
      <div>
        <h2>Welcome, new user!</h2>
        <label>
          Name:
          <input name='username' type='text'/>
        </label>
        <br></br>
        <label>
          Email:
          <input name='email' type='text'/>
        </label>
        <br></br>
        <label>
          Password:
          <input name='password' type='text'/>
        </label>
        <br></br>
        <label>
          Do you accept the terms of service?
          <input name='tos' type='checkbox'/>
        </label>
        <br></br>
        <button>Join</button>
      </div>
      
    )
}