import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import * as yup from 'yup' ;
import schema from '../validation/form_schema';
import Axios from "axios";

const initial_form_values = {
  username: "",
  email: "",
  password: "",
  terms_of_service: false,
}

const initial_form_errors = {
  username: "",
  email: "",

}

const initial_persons = [];
const initial_disabled = true;


function App() {
  const [persons, set_persons] = useState(initial_persons);
  const [form_values, set_form_values] = useState(initial_form_values);
  const [disabled, set_disabled] = useState(initial_disabled);
  const [form_errors, set_forms_errors] = useState(initial_form_errors);

  const post_new_persons = new_person => {
    Axios.post("https://reqres.in/api/users", new_person)
        .then(res => {
          set_persons([res.data, ...persons]);
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          set_form_values(initial_form_values);
        })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
        .validate(value)
        .then(() => set_forms_errors)




  return (
    <div className="App">

    </div>
  );
}






















export default App;
