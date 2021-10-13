import React, {useState, useEffect} from 'react';
import Form from './Form';
import User from './User';
import axios from 'axios';
import * as yup from 'yup';
import schema from './schema';

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
  // check this if error isn't working
  terms: '',
}

const initialUsers= [];
const initialDisabled= true;


function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get(`https://reqres.in/api/users`)
    .then(res => {
      console.log(res)
      // setUsers(res.data)
      // double check path if bugs

    }).catch(err => {
      console.error(err);
    })
  }
  

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
    .then(res => {
      setUsers([res.data, ...users]);
    }).catch(err => {
      console.error(err);
    })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]:'' }))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms
    }

    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>User Creator</h1></header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        // friends.map(friend => {
        //   return (
        //     <Friend key={friend.id} details={friend} />
        //   )
        // })
        users.map(user => {
          return(
            <User key= {user.id} details= {user} />
          )
        })
      }
    </div>
  )
}

export default App;
