import React, { useState } from "react";

export default function Form() {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
  });

  const formSubmit = e => {
    e.preventDefault();
    console.log("form submitted!");
  };

  const inputChange = e => {
    console.log("input changed!", e.target.value);
    setFormState({ name: e.target.value });
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
            id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="email">
          Email
          <input 
          id ="email" 
          type="text" 
          name="email"
          value={formState.email}
           />
      </label>
      <label HTMLfor="userPassword">
          Password (8 characters minimum):
        <input 
        id="userPassword" 
        type="password" 
        value={formState.password}/>   
      </label>
      <label HTMLfor="terms" className="terms">
          Terms of Service
        <input 
        type="checkbox" 
        name="terms" 
        checked={formState.terms} />   
      </label>
      <button>Submit</button>
    </form>
  );
}