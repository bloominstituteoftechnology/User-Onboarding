import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form'
import User from './components/Users'
import * as yup from 'yup'
import { formSchema } from './Schema/formSchema'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialUsers = []
const initialDisabled = true

function App() {

  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ users, setUsers ] = useState(initialUsers)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const inputChange = (name, value) => {

    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(({errors}) => setFormErrors({...errors, [name]: formErrors[0]}))
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = e => {

    setUsers([...users, formValues])

  }

useEffect(() => {
  formSchema.isValid(formValues)
  .then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div>
      <h1>Testing</h1>

      <Form 
      change={inputChange} 
      submit={formSubmit} 
      values={formValues}
      errors={formErrors}
      disabled={disabled}
      />

      {
        users.map(user => {
          return(
          <User info={user} errors={formErrors} />
          )
        })
      }
    </div>
  );
}

export default App;
