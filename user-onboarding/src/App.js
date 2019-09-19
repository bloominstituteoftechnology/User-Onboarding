import React, { useState } from 'react';
import FormikForm from './Form';
import axios from 'axios';


import './App.css';

function App() {

  const [users, setUsers] = useState([])

  const submitForm = (values) => {
    console.log(values)

    axios.post('https://reqres.in/api/users', values)
      .then((response) => {
        setUsers([...users, response.data])
      })


  }
  return (
    <div className="App">
      <FormikForm submit={submitForm} />

      <div>
        {users.map(user => {
          return <p>{user.name}</p>
        })}
      </div>

    </div>
  );
}

export default App;
