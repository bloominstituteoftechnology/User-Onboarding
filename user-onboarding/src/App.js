import React,{ useState, useEffect } from 'react';
import axios from 'axios'
import formSchema from './validation/formSchema';
import './App.css';
import Form from './components/Form';
// import {reach} from 'yup/lib'
// import User from './components/User';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true

export default function App() {
  const [user, setUser ] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newPerson = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
  }

  return (
    <div className="App">
      <h1>Welcome to my App. Now give me all of your info! Muahahahaha 😈</h1>
      <Form 
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
      />
    </div>
  );
}

// export default App;
