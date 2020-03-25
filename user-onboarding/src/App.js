import React, { useState } from 'react';
import Form from './components/form.component'
import './App.css';

function App() {
  const [formState, setFormState] = useState([
    {
      name: "",
      email: "",
      password: "",
      "Terms of Service": "yesss"
  }]);

  const addNewForm = info => {
    console.log("addNewForm:",info)
    const newForm = {
      id: Date.now(),
      name: info.name,
      email: info.email,
      role: info.role
    };
    setFormState([...formState, newForm]);
  };

  console.log("from app:",formState)
  return (
    <div>
      
      <Form addNewForm={addNewForm}/>
      {/* <ListNames formState={formState}/> */}

    </div>
  );
}

export default App;
