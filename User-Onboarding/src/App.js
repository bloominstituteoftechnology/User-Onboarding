import React, {useState} from 'react'
import './App.css';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from "./formValidation"



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

export default function App() {
  // STATES //
const [form, setForm] = useState(initialForm)
const [formErrors, setFormErrors] = useState(initialFormErrors)


  // AXIOS POST //
  const postNewForm = (newForm) => {
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
    axios
      .post("https://reqres.in/api/users", newForm)
      .then((response) => {
        setForm([response.data, ...form]);
        setForm(initialFormValues);
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
          [termsOfService]: false,
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
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      civil: formValues.civil.trim(),
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
      hobbies: ["coding", "reading", "hiking"].filter(
        (hobby) => formValues[hobby]
      ),
    };
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
    postNewFriend(newFriend);
  };



}



  return (
    <div className="App">
        <Form />
    </div>
  );
}