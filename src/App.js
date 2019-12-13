import React, { useState } from 'react';
import './App.css';
import UserForm from './comps/UserForm';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = user => setUsers([...users, user]);

  return (
    <div className="App">
      <UserForm addUser={addUser}/>
      <span/>
    </div>
  );
}

export default App;
