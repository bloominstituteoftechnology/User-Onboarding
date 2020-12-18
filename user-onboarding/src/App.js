import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import { v4 as uuidv4 } from 'uuid'
import user from './components/User'
import axios from 'axios'
import schema from './validation'
import * as yup from 'yup'

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialValues)
  const [disabled, setDisabled] = useState(initialDisabled)

  const newUser = (newUser) => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((res) => {
        setFormValues(initialValues)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormValues({ ...formValues, [name]: value })
      })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      pass: formValues.pass.trim(),
      terms: formValues.terms.trim()
    }
    newUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
    })
  })

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={submit}
        disabled={disabled}
      />
      <h2>Users</h2>
      {users.map((user) => {
        return <User key={uuidv4()} userinfo={user} />
      })}
    </div>
  );
}

export default App;
