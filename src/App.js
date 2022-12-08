import React, { useState } from 'react';
import './App.css';

import formSchema from './validation/formSchema';
import * as yup from 'yup';

import Form from './components/Form';


const initialFormValues = {
  username: "",
  password: "",
  email: "",
  tos: false
}

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  tos: "",
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const[formErrors, setFormErrors] = useState(initialFormErrors);

  const handleSubmi = () => {
    //WIP
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors ({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] })
  }

  const handleChange = (name, value) =>{
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  return (
    <div className="App">
      <Form values={formValues} change={handleChange} />
    </div>
  );
}

export default App;
