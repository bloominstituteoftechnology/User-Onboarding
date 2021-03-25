import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import schema from "./formValidation"
import NewForm from './Form';



// Initial State //

const initialFormValues = {
  // Text Inputs
  name: '',
  email: '',
  password: '', 
  // checkboxes
  termsOfService: false, 
};

const initialFormErrors = {
  name: '',  // being blank, it's an error
  email: '', // being blank, it's an error
  password: '', // being blank, it's an error
  termsOfService: false, //checkbox, false displays unchecked
}

const initialForm = []; // starting form is an EMPTY ARRAY, each form is an OBJECT
const initialDisabled = true;

export default function App() {
  // STATES //
const [form, setForm] = useState(initialForm);
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);


  // AXIOS POST //
  const postNewForm = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((response) => {
        setForm([response.data, ...form]);
        setFormValues(initialFormValues);
        setDisabled(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // EVENT HANDLERS //
  const inputChange = (name, value) => {
    yup
      .reach(schema, name) // search the schema for 'name'
      .validate(value) // validate the entry (formValidation)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          // validation error from schema
          [name]: error.errors,
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
    };
    postNewForm(newUser);
  };

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      }) 
  }, [formValues])

  return (
    <div className="App">
        <NewForm values={formValues} submit={formSubmit} change={inputChange} disabled={disabled} errors={formErrors} />
        {form.map((user, idx) => {
          return (
            <div key={idx}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            </div>
          )
        })}
    </div>
  );
}