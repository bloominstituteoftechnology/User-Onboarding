import React, { useSate, useEffect } from 'react';
import Form from './information/Form';
import User from './information/User';
import axios from 'axios';


const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
};

const initialFormErrors = {
  name: '',
  email: '',
  password: ''
};

const initialUsers = []
const initialDisabled = true

export default function App() {
  const [users, setUsers] = useSate(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useSate(initialFormErrors)

  const getUsers = () => {

  };

  const postNewUser = newUser => {

  };


  const inputChange = (name, value) => {

    setFormValues({
      ...formValues,
      [name]: value
    })
  };

  const formSubit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      // terms:
    }
  };



  useEffect(() => {
    getUsers()
  }, []);

   

  return (
    <div className='container'>
      <header><h1>User Onboarding</h1></header>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubit}
        disabled={disabled}
        errors={formErrors}
        />

        {
          users.map(user => {
            return (
              <User key={user.id} details={user} />
            )
          })
        }
    </div>
  );
}