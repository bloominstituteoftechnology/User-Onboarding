import Form from "./Form"
import '../App.css';
import React, {useState, useEffect} from "react";
import * as yup from 'yup' ;
import schema from '../form_schema';
import Axios from "axios";
import Person from './Person'


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
        .then(() => set_forms_errors({...form_errors,[name]: ""}))
        .catch(err => set_forms_errors({...form_errors, [name]: err.errors[0]}))
  }
  const input_change = (name, value) => {
    validate(name, value);
    set_form_values({
      ...form_values,
      [name]: value
    })
  }

  const form_submit = () => {
    const new_person ={
      username: form_values.username.trim(),
      email: form_values.email.trim(),
      password: form_values.password.trim(),
    }

    post_new_persons(new_person);
  }

  useEffect(() => {
    schema.isValid(form_values).then(valid=> set_disabled(!valid))
  }, [form_values])


  return (
    <div className="App">
      <header><h1>Persons App</h1></header>

      <Form
        values={form_values}
        change={input_change}
        submit={form_submit}
        disabled={disabled}
        errors={form_errors}
      />
      {
        persons.map(person => {
          return (
              <Person key={person.id} details={person}/>
          )
        })
      }

    </div>
  );
}


export default App;
