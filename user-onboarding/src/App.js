import './App.css';
import Form from './components/Form.js';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err))
  }

  const submitForm = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms
    }
    postNewUser(newUser)
  }

  return (
    <div className="App">
      <Form values={formValues} change={inputChange}/>
    </div>
  );
}

export default App;
