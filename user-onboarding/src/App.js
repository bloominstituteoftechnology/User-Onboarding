import React, { useState } from 'react';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';

const initialValues = {
  username: '',
  email: '',
  password: '',
  terms: false
}


function App() {
  const [values, setValues] = useState([]);


  return (
    <div className="App">
      <Form values={values} />
    </div>
  );
}

export default App;
