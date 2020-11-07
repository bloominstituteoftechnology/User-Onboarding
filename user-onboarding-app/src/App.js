import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState("");

  const addNewUser = (user) => {
    const newUser = {
      name: user.name,
      email: user.email,
      role: user.password
    };

    setUsers([newUser, ...users]);
  };
  return (
    <div className="App">
<Form />
    </div>
  );
}

export default App;
