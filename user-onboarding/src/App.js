import './App.css';
import React, { useState, useEffect } from 'react';
import form from './Components/Form'
import formSchema from './Validation/formSchema'
import axios from 'axios';

const initialFormValues = {
  username: '',
  password: '',
  email: '', 
  checked: false
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
 
  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users'), formValues)
      .then(res=> {
        setUsers
      })
    
  }

  const validate = (name, value) => {
    yup.reach(value).then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  return (
    <form className="form container" >
      <div className="on-board submit">
        <h2>Welcome Aboard!</h2>
        <Form values={formValues} />

        <button>Submit</button>

        
      </div>
    </form>
  );
}

export default App;
