import Form from './Form'
import './App.css';
import React, {useState, useEffect} from 'react'
import FormSchema from './Validation'
import * as yup from 'yup'
import axios from 'axios'

const initialFormValues= {
  name: '',
  email: '',
  password: '',
  tos: false
}

const initialErrors= {
  name: '',
  email: '',
  password: '',
  tos: ''
}
const initialDisabled = true

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState (initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const validation = (name, value) => {
    yup.reach(FormSchema, name)
    .validate(value)
    .then(() => setErrors ({ ...errors, [name]: '' }))
    .catch( err => setErrors ({ ...errors, [name]: err.errors[0] }))
  }

  const inputChange= (name, value) => {
    validation(name, value);
    setFormValues({ ...formValues, [name]:value})
  }

  const formSubmit= () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then( res => {
      setUsers([res.data, ...users])
      setFormValues(initialFormValues)
      setErrors(initialErrors)
       })
       .catch(err => console.error(err))
       .finally(() => setFormValues(initialFormValues))
      // const newUser= {
      //   name: formValues.name.trim(),
      //   email: formValues.email.trim(),
      //   password: formValues.password,
      //   tos: !formValues.tos
      // }
      
  }

  // const postUser = newUser => {
    
  // }

  useEffect(() => {
    FormSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  

  return (
    <>
    <div className="container">
      <Form 
      value={formValues}
      change= {inputChange}
      submit= {formSubmit}
      errors= {errors}
      disabled={disabled}
      />
    </div>
    <div className="new-member-onboard">
      {users.map(user => (
        <div key={user.id}>
         <p>WELCOME {user.name}! Thanks for your submission. You will receive an email at {user.email} to complete your onboarding, shortly!
         </p>
         </div>
  ))
    }
     
    </div>
    </>
  )
}

export default App;
