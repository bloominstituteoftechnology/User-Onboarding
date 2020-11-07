import React, { useState } from 'react';

function Form(props) {
    console.log(props)
    useState({ name: "", email: "", password: "" });

  const submitForm = (event) => {
      event.preventDefault();
    };
    
    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet" />
                    </head>
            <form onSubmit={submitForm}>
                <label>Name:</label>
                <input type='text' name='name' id='name' placeholder='John Doe' minlength="5"
                        onChange={submitForm} required />
                <label>Email:</label>
                <input type='email' name='email' id='email' placeholder='johndoe@email.com'  onChange={submitForm} required />
                <label>Password:</label>
                <input type='text' name='password' id='password' placeholder='*****************' minlength="8" onChange={submitForm} required />
                <a href="#">Terms of Service</a>
                <input type='checkbox' required />
                <button type='submit' onClick={() => submitForm}>Submit</button>
            </form>
        </div>
    );
}

export default Form;