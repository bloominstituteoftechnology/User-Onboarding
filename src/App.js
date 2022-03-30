import React, {useState, useEffect} from 'react';
import Form from './components/Form'
import './App.css';
import * as yup from 'yup';
import schema from "./validation/formSchema"

function App() {
  const initialFormValues = {
    name: '',
    email: '',
    termsOfService: ''
  }
  const initialUsers = [];
  // State is set below
  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setFormUsers] = useState(initialUsers);


  //various helper functions


 
  // renders out in the react DOM
  return (
    <div className="App">
      <header className="App-header">
      <h1>Join our company today!</h1>
      </header>
        <Form 
          values={formValues}
        />
    </div>
  );
}

export default App;
