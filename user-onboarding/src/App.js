import './App.css';
import Form from './components/Form'
import React, { useState } from 'react';


const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
} 

function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues)

  return (
    <div className="App">
      <h1>App Working!</h1>
      <Form/>
    </div>
  );
}

export default App;
