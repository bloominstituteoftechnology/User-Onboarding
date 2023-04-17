import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import * as yup from 'yup';
import schema from './validation/formSchema';
import Form from './components/Form';


const initFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

function App() {
  const[formValues, setFormValues] = useState(initFormValues);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const [users, setUsers] = useState([]);
  
  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(r => {
      setUsers([r.data, ...users])
    })
    .catch(err => console.error(err))
    .finally(()=> setFormValues(initFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }
  return (
    <div className="App">
    <Form 
      values={formValues} 
      change={handleChange} 
      errors={formErrors} 
      submit={handleSubmit}
    />
    {users.map(user => (
      <div key={user.id}>
        {console.log(user)}
        <p>{user.createdAt}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        </div>
    ))}
      </div>
  );
}

export default App;
