import React, { useState } from 'react';
import Form from './components/Form';

function App() {

  const initialFormValues = {
    name: '',
    email: '',
    password: '',
    terms: false,
  }

  const initialUsers = []

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)


  const inputChange = (name, value) => {
    console.log(name, value)
  }


  return (
    <div className="container">
      <Form
        values={formValues}
        change={inputChange}
      />
    </div>
  );
}

export default App;
