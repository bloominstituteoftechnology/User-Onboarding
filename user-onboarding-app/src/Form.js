import React, { useState } from 'react';
import * as yup from 'yup'; // for everything
// or
import { string, object } from 'yup'; // for only what you need

function Form(props) {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [display, setDisplay] = useState(false);

  const submitForm = (event) => {
      event.preventDefault();
      setDisplay(true);
    };

    let yup = require('yup');

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet" />
                    </head>
            <form onSubmit={submitForm}>
                <label>Name:</label>
                <input type='text' name='name' id='name' placeholder='John Doe' 
                        onChange={submitForm} required />
                <label>Email:</label>
                <input type='text' name='email' id='email' placeholder='johndoe@email.com'  onChange={submitForm} required />
                <label>Password:</label>
                <input type='text' name='password' id='password' placeholder='*****************'   onChange={submitForm} required />
                <a href="#">Terms of Service</a>
                <input type='checkbox' required />
                <button type='submit' onClick={() => submitForm}>Submit</button>
            </form>
        </div>
    );
}

export default Form;