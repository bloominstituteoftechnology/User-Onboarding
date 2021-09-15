import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';

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

  const update = (name, value) => {
    console.log(name, value);
    setValues({ ...values, [name]: value});
  }

  const submit = () => {
    const newWorker = {
      username: values.username,
      email: values.email,
      password: values.password,
      wrkPref: values.wrkPref,
      terms: values.terms
    }
    setWorkers([ ...workers, newWorker ]);
  }

  const validation = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.error[0] }))
  }

  return (
    <div className="App">
      <Form values={values} update={update} submit={submit} />
      <WorkersList workers={workers} />
    </div>
  );
}

export default App;
