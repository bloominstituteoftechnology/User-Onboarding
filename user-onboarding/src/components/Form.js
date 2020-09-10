import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from "axios";


const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    email: yup.string().email("Must be a valid email address").required("Must include email address."),
    terms: yup.boolean().oneOf([true], "Please agree to the terms of use"),
});


function Form() {

const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
});

const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });


const [newForm, setNewForm] = React.useState([]);


const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

const handleChange = event => {
    console.log(event.target.value);
    setNewForm({
      ...newForm,
      [event.target.name]:
        event.target.type === "checkbox" ? event.target.checked : event.target.value
    });
  };

  const handleSubmit = event => {
      event.preventDefault();
      axios.post("https://reqres.in/api/users", formState)
  }

 const validateChange = event => {
    yup
    .reach(formSchema, event.target.name)
    .validate(event.target.value)
    .then(valid => {
      setErrors({
        ...errors,
        [event.target.name]: ""
      });
    })
    .catch(err => {
      setErrors({
        ...errors,
        [event.target.name]: err.errors[0]
      });
    });
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={newForm.name}
        placeholder="Name"
      />
      <input
        onChange={handleChange}
        type="text"
        name="email"
        value={newForm.email}
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        value={newForm.role}
        placeholder="Password"
      />

<label htmlFor='terms' className='terms'>
        <input
          type='checkbox'
          name='terms'
          checked={newForm.terms}
          onChange={handleChange}
        />
        Terms & Conditions
      </label>
      <button type="submit">Add User</button>
    </form>
);
  }

export default Form;