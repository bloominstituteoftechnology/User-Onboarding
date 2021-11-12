import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form';
import * as yup from 'yup';
import axios from 'axios';
import schema from './validation/formSchema'


const intialFormValues = {
  username: '',
  password:'',
  email:'',
  tos:false
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos:''
}

const initialUsers = [];
const initialDisabled = true;


function App() {
  
  const [formValues, setFormValues] = useState(intialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers]=useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);
  

  
  const handleSubmit = () => {
      axios.get(`https://reqres.in/api/users`)
          .then(res => {
              setUsers(res.data)
          }).catch(err => {
          console.error(err)
      })
     
      const postNewHandle= newHandle => {
        axios.post('https://reqres.in/api/users', newHandle)
            .then(res => {
                setUsers([res.data]);
            }).catch(err => {
            console.error(err)
        }).finally(()=>{
            setFormValues(intialFormValues)
        })
    }
  const validate = (name, value) => {
      yup.reach(schema, name)
          .validate(value)
          .then(() => setFormErrors({ ...formErrors, [name]: '' }))
          .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = ( name, value) => {
      validate(name, value);
      setFormValues({
          ...formValues,
          [name]: value
      })
  }

  const formSubmit = () => {
    const newHandle = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        terms: ['terms']
    }
    postNewHandle(newHandle)
}
useEffect(() => {
  handleSubmit()
}, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
      <div className="App">
          <h1>User On-Boarding</h1>

          <Form
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              errors={formErrors}
              disabled={disabled}
          />
          {users.map(user => {
            <div> key={users.id}
              <p>{user.createdAt}</p>
            <p>{user.email}</p>
            </div> 
          
        })
      }
      </div>
  )}
}

export default App;


