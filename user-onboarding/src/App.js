
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation.js'
import Form from './components/Form'
import Users from './components/Users';
import "./styles.css";

import './App.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
  tos: ''
}
const initialErrors = {
  name: '',
  email: '',
  password: '',
  tos: ''
}
const initialUsers = []
const isDisabled = true
function App() {
  const [users, setUsers] = useState(initialUsers)
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(isDisabled)

  const grabUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then((res) => {
      setUsers(res.data.data);
    })
    .catch((err) => {
      console.log(err)
    })}
  
    useEffect(() => {
      grabUsers()
    },[])

  const newUser = (newUsers) => {
    axios.post('https://reqres.in/api/users', newUsers)
    .then(res =>{
        setUsers([...users, res.data])
        setValues(initialValues)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(()=>{})
  }

  useEffect(() => {
    schema.isValid(values)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [values])

  const onSubmit = () => {
    const newUsers = {
      username: values.username.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    }
    newUser(newUsers)
  }

  const validate = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(()=> setErrors({...errors, [name]: "",}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setValues({...values, [name]: value
    })
  }

  return (
    <div className="App">
            <header>
        <h1>User Onboarding</h1>
      </header>
      <Form
      values={values}
      change={inputChange}
      submit={onSubmit}
      disabled={disabled}
      errors={errors}/>

      {users.map(user => {
        return ( <Users key={user.id} details={user}/>)
      })}
    </div>
  );
}

export default App;
