import React, { useEffect } from 'react';
import FormikForm from './Form';
import axios from 'axios';


import './App.css';

function App() {

  const submitForm = (values) => {
    console.log(values)

    axios.post('https://reqres.in/api/users', values)
      .then((response) => {
        console.log(response)
      })


  }
  return (
    <div className="App">
      <FormikForm submit={submitForm} />

    </div>
  );
}

export default App;
