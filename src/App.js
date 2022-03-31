import React, {useState, useEffect} from 'react';
import Form from './components/Form'
import axios from 'axios'
import './App.css';
import * as yup from 'yup';
import schema from "./validation/formSchema"


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
  // State is set below
  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFormErrors);


  //various helper functions
 
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: "" }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))}


  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios.post(`https://reqres.in/api/users`, formValues)
      .then(res => {
        setUsers([res.data, ...users]);
        console.log('Success!')
      })
      .catch(err => console.error(err))

  }
 

  

  // renders out in the react DOM
  return (
    <div className="App">
      <header className="App-header">
      <h1>Join our company today!</h1>
      </header>
        <Form 
          values={formValues}
          change={inputChange}
          errors={formErrors}
          submit={onSubmit}
        />
        {users.map(user => (
          <div key={user.id} >
            <p>{user.createdAt}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
