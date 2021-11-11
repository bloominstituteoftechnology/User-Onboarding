import React, { useState } from 'react';

import Form from './components/Form.js';
import './App.css';



const initialValues = {
  username: '',
  password: '',
  email: '',
  terms: false
}


function App() {
const [formValues, setFormValues] = useState(initialValues);

const handleSubmit = () => {

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
