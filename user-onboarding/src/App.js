import './App.css';
import Form from './components/Form.js';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import User from './components/User';

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
        // console.log(res);
        setUsers([res.data, ...users]);
      })
      .catch(err => console.error(err)).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const submitForm = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms
    }
    postNewUser(newUser);
    setFormValues(initialFormValues);
  }

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        // console.log(res.data.data);
        setUsers(res.data.data);
        console.log(users)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <Form values={formValues} change={inputChange} submit={submitForm} />
      {users.map(user => {
        return (
          <User
            name={user.first_name}
            email={user.email}
            id={user.id}
          />
        )
      })}
    </div>
  );
}

export default App;
