import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Form from './components/Form'
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialDisabled = false
const initialUsersList = [
  {
    id: 1, 
    firstname: 'John',
    lastname: 'Harding',
    password: '',
    email: 'john.harding@somecompany.com',
    civil: 'married',
    role: 'designer',
    tos: ['full', 'half','contract']
  },
]

const initialFormValues = {
  ///// TEXT INPUTS /////
    firstname: '',
    lastname: '',
    password: '',
    email: '',
  //// Radio Buttons
    civil: '',
  //// Checkbox
    tos: '',
  ///// DROPDOWN /////
    role: ''
}

const initialFormErrors = {
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    civil: '',
    tos: '',
    role: ''  
}

function App() {
  const [users, setUsers] = useState(initialUsersList); // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  const updateForm = (name, value) => {
    validate (name, value)
    setFormValues({ ...formValues, [name]: value });
  }

  const postNewUser = newUser => {
    
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log('res.data: ', res.data);
        setUsers([res.data, ...users]);
        
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const submitForm = () => {
    const newUser = {
      firstname: formValues.firstname.trim(),
      lastname: formValues.lastname.trim(),
      // password: formValues.password.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      civil: formValues.civil.trim(),
      tos: ['full', 'half', 'contract'].filter(item => !!formValues[item])
    }    
          
      setUsers([newUser, ...users]);
      setFormValues(initialFormValues);
      setFormErrors("");      
      console.log('users: ',users);      
      postNewUser(newUser);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="container">
      <h2>Form App</h2>

      <Form
        values={formValues}
        change={updateForm}
        submit={submitForm}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <Card key={user.id} details={user} />
          )
        })
      }

    </div>
  );
}

export default App;