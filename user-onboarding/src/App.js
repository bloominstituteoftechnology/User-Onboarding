import React, { useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/FormValidate';
import User from './components/User';



const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}

const intitialFormErrors = {
  name: '',
  email: '',
  password: ''
}

const initialDisabled = true;
const initialUsers = []


function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(intitialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err)
      })
  }

  const postNewUser = newUser => {
      axios.post('https://reqres.in/api/users'. newUser)
        .then(res => {
          setUsers([res.data, ...users])
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          setFormValues(initialFormValues)
        })
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name).validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        console.error(err)
      })
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]:value})
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="App">
      <div>
        <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
        {
          users.map(user => {
            return (
              <User key={user.id} details = {user} />
            )
          })}

      </div>
    </div>
  );
}

export default App;
