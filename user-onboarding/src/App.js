import React, { useState, useEffect} from 'react';
import './App.css';
import * as yup from 'yup'
import Form from './Form'
import axios from 'axios'
import schema from './validation/formSchema'

const initialFormValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  termsofservice: false,
}

const initialFormErrors = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  termsofservice: '',

}
const initialUsers = []
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  return (
    <div className="App">
      <div className="App-container">

      </div>
    </div>
  );
}

export default App;
