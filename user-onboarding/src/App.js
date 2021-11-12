import React, { useState } from 'react';
import './App.css';

import schema from './Validation/formSchema';
import * as yup from 'yup';
import Form from './Components/Form';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleSubmit = () => {

  }
  const validate = (name, value) => {
  
  }

  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value});
  }
  return (
    <div className="App">
      <Form values={formValues} change={handleChange}/>
    </div>
  );
}

export default App;
