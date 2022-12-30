import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import Form from './component/Form';
import schema from './validation/formSchema';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: ''
}

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

 }
const handleSubmit = () => {
  axios.post('https://reqres.in/api/users', formValues)
  .then(res => {
    setUsers([ res.data, ...users])
    console.log(res);
  })
  .catch(err => console.error(err))
  .finally(() => setFormValues(initialFormValues))
}

const validate = ( name, value) => {
yup.reach(schema, name)
.validate(value)
.then(() => setFormErrors({ ...formErrors, [name]: '' }))
.catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

const inputChange = (name, value) => {
  validate(name, value);
    setFormValues({ ...formValues, [name]: value });

  
return (
  <div className="App">
  <Form 
    values={formValues}
    change={inputChange}
    submit={formSubmit}
    errors={formErrors}
  />
    {users.map(user => (
      <div >
      <p>{user.creadAt}</p>
      <p>{user.email}</p>
      </div>
    ))}
    </div>
);

}
export default  App;