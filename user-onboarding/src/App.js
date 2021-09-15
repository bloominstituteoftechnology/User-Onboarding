import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

import Form from './components/Form';
import WorkersList from './components/WorkersList';

const initialValues = {
  username: '',
  email: '',
  password: '',
  wrkPref: '',
  terms: false
}

const initialErrors = {
  username: '',
  email: '',
  password: '',
  wrkPref: '',
  terms: ''
}

const initialWorkers = [];

function App() {
  const [values, setValues] = useState(initialValues);
  const [workers, setWorkers] = useState(initialWorkers);
  const [errors, setErrors] = useState(initialErrors);

  const update = (formName, formValue) => {
    console.log(formName, formValue);
    setValues({ ...values, [formName]: formValue});
  }

  const submit = () => {
    const newWorker = {
      username: values.username,
      email: values.email,
      password: values.password,
      wrkPref: values.wrkPref,
      terms: values.terms
    }

    
  }

  return (
    <div className="App">
      <Form values={values} update={update} submit={submit} />
      <WorkersList workers={workers} />
    </div>
  );
}

export default App;
