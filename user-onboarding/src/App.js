//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

import Form from './Form';
import User from './User';

import schema from '../src/Validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';

const initialFormVals = {
  first_name: '',
  last_name:'',
  email: '',
  password: '',
  terms: false,
  //submit: '' -- dont think you need this one
}
//do the errors here
const initialFormErrors = {
  first_name: '',
  last_name:'',
  email: '',
  password: '',
  terms: '',
}

const initialUser = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUser);
  const [formVals, setFormVals] = useState(initialFormVals);
  const [formErrs, setFormErrs] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  //Axios here
  const getUsers = () => {
    axios.get(`https://reqres.in/api/users`)
      .then(res => {
        setUsers(res.data.data);
      }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
      .then(res => {
         setUsers([res.data, ...users])
         setFormVals(initialFormVals);
      }).catch (err => {
        console.error(err);
        setFormVals(initialFormVals);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrs({ ...formErrs, [name]:''}))
    .catch(err => setFormErrs({ ...formErrs, [name]: err.errors[0]}))
  }


  const inputChange = (name, value) => {
    validate(name, value);
    setFormVals({ ...formVals, [name]: value})
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formVals.first_name.trim(),
      last_name: formVals.last_name.trim(),
      email: formVals.email.trim(),
      password: formVals.password.trim(), // ----- this should probably not be shown the more i think about it
      terms: formVals.terms
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
 }, [])

 useEffect(() => {
   schema.isValid(formVals).then(valid => setDisabled(!valid))
 }, [formVals])

  return (
    <div className="App">
      <header className="App-header">
        NEW USER FORM:
      </header>
    <div>
      <Form 
         values={formVals}
         change={inputChange}
         submit={formSubmit}
         disabled={disabled}
         errors={formErrs}
         /> 
      </div>
  {
       users.map(user => {
          return (
            <User key={users.id} details={user} />
          )
        })
      } 
    </div>
  );
}

export default App;
