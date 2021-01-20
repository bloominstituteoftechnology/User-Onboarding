import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Input from './Input.js'


function Form() {
  const userList = [
    { name: 'John Doe', email: 'doe@gmail.com', password: 12345, acceptTerms: true },

  ];
  const initialFormValues = {
    name: "", 
    email: "",
    password: "",
    terms: false
  };

  // const [teamMembers, setTeamMembers] = useState(userList);
  const [formValues, setFormValues] = useState(initialFormValues); // inputs
  const [formState, setFormState] = useState(false); // checkbox

  const inputChange = (e) => {
    console.log("input changed: ", e.target);
    console.log(formValues);
    const { name, value } = e.target;
    // this basically says { teamMemberName: '', teamMemberLocation: '', teamMemberName: 'exampleValue' }
    setFormValues({ ...formValues, [name]: value });
  }

  const submit = (e) => {
    e.preventDefault();

    // const newTeamMember = {
    //   // needs identical structure to the other pets
    //   teamMemberName: formValues.teamMemberName.trim(),
    //   teamMemberLocation: formValues.teamMemberLocation.trim()
    // }
    // console.log(newTeamMember);

    // Note for developer
    // if (!newTeamMember.teamMemberName) || (!newTeamMember.teamMemberLocation) return "Missing name or location"

  //   // use your setTeamMembers helper function
  //   setTeamMembers(teamMembers.concat(newTeamMember));
  //   // reset the formsValue state
  //   setFormValues(initialFormValues);
   }

  const handleChange = event => {
    // Pull out the info of interest
    const { name, type, value, checked } = event.target;
    // Find out which value to use (the actual "value" of the target or its "checked" in the case of a checkbox)
    const updatedInfo = type === 'checkbox' ? checked : value;
    // Update state
    setFormState({ ...initialFormValues, [name]: updatedInfo });
  }

  return (
    <div>
  
      <form onSubmit={submit}>

        <Input
            type="text"
            name="name"
            placeholder="name"
            onChange={inputChange} 
            value={formValues.name}
            label={"Name"}
        />

        <Input
            type="text"
            name="email"
            placeholder="email"
            onChange={inputChange} 
            value={formValues.email}
            label={"Email"}
        />

        <Input
            type="text"
            name="password"
            placeholder="password"
            onChange={inputChange} 
            value={formValues.password}
            label={"Password"}
        />

        <select name="role" id= "role-select">
          <option value="">Select Role</option>
          <option value="note-taker">Note Taker</option>
          <option value="zoom-master">Zoom Master</option>
          <option value="facilitator">Facilitator</option>
          <option value="time-keeper">Time Keeper</option>
        </select>

        <label>
          I Accept The Terms of Service
          <input
            name="accept"
            type="checkbox"
            checked={formState.accept} // The expression `formState.accept` evaluates to either true or false.
            onChange={handleChange}
          />
        </label>

          <button>Submit</button>
      </form>

      {/* {
        teamMembers.map((teamMember, i) => (
          <div key={i}>
            {teamMember.teamMemberName} is from {teamMember.teamMemberLocation}
          </div>
        ))
      } */}

    </div>

  );


}

export default Form;