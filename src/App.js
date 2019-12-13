import React, { useState } from 'react';
import './App.css';
import UserForm from './comps/UserForm';
import UserList from './comps/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = user => setUsers([...users, user]);

  return (
    <div className="App">
      <UserForm addUser={addUser}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
