import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './formSchema.js'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  agreed: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  agreed: false,
}
const initialUsers = []

function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {console.log(err);})
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers(users.concat(newUser))
        console.log(res.data)
      })
      .catch(err => {console.log(err);})
      setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {setFormErrors({...formErrors, [name]: ''})})
      .catch(err => {setFormErrors({...formErrors, [name]: err.errors[0]})})
    setFormValues({...formValues,[name]: value})
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      agreed: formValues.agreed
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="app">
      <header><h1>Users</h1></header>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
      />
      <h1>Users:</h1>
      {users.map(user=>{
        return(
          <div key = {user.id}>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
