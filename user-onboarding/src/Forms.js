import React, { useState } from "react";
import Input from "./Input";

function Form() {
  //managing state for our form inputs, This is adding that value
  const defaultState = {
    name: "",
    email: "",
    gender: "",
    password: "",
    terms: false,
  };

  const [formState, setFormState] = useState(defaultState);

  //onSubmit
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form was successfully submitted");
  };

  //OnChange-- I would like clarity on this
  const inputChange = (e) => {
    console.log("input changed!", e.target.value);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <Input
          name="name"
          type="text"
          onChange={inputChange}
          value={formState.name}
          label="Name"
        />
        <br></br>
        <Input
          name="email"
          type="text"
          onChange={inputChange}
          value={formState.email}
          label="Email"
        />
        <br></br>

        <Input
          name="gender"
          type="text"
          onChange={inputChange}
          value={formState.gender}
          label="Gender"
        />
        <br></br>
        <Input
          name="password"
          type="password"
          onChange={inputChange}
          value={formState.password}
          label="Password"
        />
        <br></br>
        <label htmlFor="gender" onChange={inputChange}>
          Gender
          <select name="gender">
            <options value="male">Male</options>
            <options value="female">Female</options>
            <options value="trans">Trans</options>
            <options value="nonBinary">Non-Binary</options>
            <option value="notListed">Not Listed</option>
          </select>
        </label>

        {/* <Input 
        type="check" */}

        {/* <label htmlFor="email">
          Email
          <input
            
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            type="text"
            onChange={inputChange}
            value={formState.password}
          />
        </label> */}
        {/* <label htmlFor="terms">
          Password
          <input
            name="terms"
            type="text"
            onChange={inputChange}
            value={formState.terms}
          />
        </label> */}
        <br></br>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
//m, f, nonbinary, not listed
