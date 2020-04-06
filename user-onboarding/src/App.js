import React, { useState } from 'react';
import './App.css';
import Form from './Components/UserForm.component';
import FormShape from './Components/FormShape.component'

function App() {
  const [formState, setFormState] = useState([
    {
      id: 1,
      name: "Josh",
      email: "myemail@google.com",
      password: "abcd1234",
    }
  ])

  const formHandler = newForm => {
    setFormState([...formState, newForm]);
  }

  return (
    <div className="App" >
      <h1>User Onboarding</h1>
      <Form addForm={formHandler} />
      <FormShape forms={formState} />
    </div>
  );
}

export default App;
