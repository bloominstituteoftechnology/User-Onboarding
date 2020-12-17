import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Form';

const initialValues = {
  name: '',
  email: '',
  password: '',
  serviceTerms: false,
};
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
};
const initialUsers = [];
const initialDisabled = false;



function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // inputChange is changing the formValues by spreading to get a new form ?// Values array, then changing whatever was changed [name] to whatever // // value it was changed to value

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
}


  return (
    <div className="App">
    <Form values={formValues}
    submit={onSubmit}
    change={inputChange}
    disabled={disabled}
    errors={formErrors} />
    </div>
  );
}

export default App;
