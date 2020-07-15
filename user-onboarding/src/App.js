import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <h1>User Onboarding</h1>
      <Form users={users} setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
