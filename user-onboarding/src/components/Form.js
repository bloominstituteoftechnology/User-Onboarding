import React, { useState, useEffect } from 'react';
import Input from './Input';
import * as yup from 'yup';
import axios from 'axios';

export default function Form(props) {
  // managing state for the form inputs
  const defaultState = {
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    role: "",
    terms: false
  };

  const [formState, setFormState] = useState(defaultState);

  // all errors need to be a string so the error messages can be displayed
  const [errors, setErrors] = useState({ ...defaultState, terms: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // formState schema
  let formSchema = yup.object().shape({
    name: yup.string().required("Please provide your name."),
    email: yup.string().required("Please provide your email.").email("This is not a valid email."),
    phone: yup.string().required("Please enter your phone number."),
    username: yup.string().required("Please create your username."),
    password: yup.string().required("Please create your unique password."),
    role: yup.string().required(),
    terms: yup.boolean().oneOf([true], "Please agree to our Terms & Conditions.")
  });

  useEffect(() => {
    formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
  }, [formState]);

  // onSubmit function
  const formSubmit = e => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        console.log(`form submit success! "${res.data.name}" has been added!`);
        console.log(res.data);
        props.setUsers([...props.users, res.data]);
      })
      .catch((err) => console.log(err));
  };

  // validate whether value meets schema
  const validateChange = e => {
    e.persist();
    // reach allows us to check a specific value of the schema
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid =>
        setErrors({
          ...errors,
          [e.target.name]: ""
        })
      )
      .catch(error => 
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0]
        })
      );
  };

  // onChange function
  const inputChange = e => {
    // ternary operator to determine the form value
    // console.log(e.target.type);
    const value = 
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
    validateChange(e);
  };

  return (
    <form onSubmit={formSubmit}>
      <Input
        type="text"
        name="name"
        onChange={inputChange}
        value={formState.name}
        label="Name"
        errors={errors}
      />
      <Input
        type="text"
        name="email"
        onChange={inputChange}
        value={formState.email}
        label="Email"
        errors={errors}
      />
      <Input
        type="text"
        name="phone"
        onChange={inputChange}
        value={formState.phone}
        label="Phone"
        errors={errors}
      />
      <Input
        type="text"
        name="username"
        onChange={inputChange}
        value={formState.username}
        label="Username"
        errors={errors}
      />
      <Input
        type="password"
        name="password"
        onChange={inputChange}
        value={formState.password}
        label="Password"
        errors={errors}
      />
      <label htmlFor="role">
        Choose an interest:
        <select id='positions' name="role" onChange={inputChange}>
          <option value="Front-end">Front-end</option>
          <option value="Back-end">Back-end</option>
          <option value="Full-stack">Full-stack</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>
      </label>
      <label className="terms" htmlFor="terms">
        <input data-cy='terms' name="terms" type="checkbox" onChange={inputChange} />
        Terms & Conditions
      </label>
      <button id='next' disabled={buttonDisabled}>Next</button>
    </form>
  );

}
