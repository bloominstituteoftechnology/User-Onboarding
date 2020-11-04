import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Users from './components/Users';
import './App.css';
import Axios from 'axios';
import * as yup from 'yup';
import FormSchema from './components/FormSchema';

function App(props) {

  const initialFormValues = {

    fullname: '',
    email: '',
    password: '',
    terms: false

  }

  const initialFormErrors = {

    fullname: '',
    email: '',
    password: '',
    terms: false

  }

  const initialUsers = [];
  const initialDisabled = true;

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

    const addUser = (newUser) => {

      Axios.post('https://reqres.in/api/users', newUser)

        .then((res) => {
          setUsers([res.data, ...users])
        })

        .catch((err) => {
          debugger;
          alert('We have identified a problem.', err)
        })
        
        .finally(() => {
          setFormValues(initialFormValues)
        })
    }

    const onInputChange = (e) => {

      const {name, value} = e.target;

      yup.reach(FormSchema, name)
      .validate(value)
      .then(() => {
        setErrors({...errors, [name]: ''})
      })
      .catch((err) => {
        setErrors({...errors, [name]: err.errors[0]})
      })
    setFormValues({...formValues, [name]: value})
    }      

    const onCheckboxChange = (e) => {
      const {name, checked} = e.target;
  
      yup
        .reach(FormSchema, name)
        .validate(checked)
        .then(() => {
          setErrors({...errors,[name]: ''})
        })
        .catch((err) => {
          setErrors({...errors,[name]:err.errors[0]})
        })

      setFormValues({...formValues,[name]:checked})
    }

    const onSubmit = (e) => {
      e.preventDefault()
  
      const newUser = {
        fullname: formValues.fullname.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
      }
  
      addUser(newUser);
    }
  
    useEffect(() => {
      FormSchema.isValid(formValues).then(valid => {
        setDisabled(!valid);
      })
    }, [formValues])

  return (
    <div className="App">
      <header>
        <h1>Welcome aboard!!</h1>
        <h3>Please fill out the form below.</h3>
      </header>
      <Form 
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={errors}
      />
      {users.map((user) => {

        return (
          <Users key={user.id} data={user} />
        )
      })
      }
    </div>
  );
}

export default App;
