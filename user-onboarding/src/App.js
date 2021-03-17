import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form'
import User from './components/Users'
import * as yup from 'yup'
import { formSchema } from './Schema/formSchema'

formSchema.isValid({

})

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
    yup
    .reach(formSchema, name)

    .vaidate(value)

    .then(() => setFormErrors({...formErrors, [name]: ''}))

    .catch(({errors}) => setFormErrors({...formErrors, [name]: errors[0]}))
    
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = e => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ['terms']
    }
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
          <User info={user} />
          )
        })
      }
    </div>
  );
}

export default App;
