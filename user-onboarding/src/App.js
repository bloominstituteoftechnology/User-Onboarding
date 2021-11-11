import React, {useState} from 'react';
import * as yup from 'yup';
import axios from 'axios'
import './App.css';

import formSchema from './Validation/formSchema';
import Form from './Components/Form.JS';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false,
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: '',
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([])

  const handleSubmit = () => {
    axios.post('https://regres.in/api/users', formValues)
    .then(resp => {
      setUsers([resp.data, ...users])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  return (
    <div className="App">
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
      {users.map(user => {
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      }) }
    </div>
  );
}

export default App;
