import React, { useState } from 'react';
import { UserForm } from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  
  const updateUsers = (newUser) => {
    const userlist = [...users, newUser]
    setUsers(userlist)
  }

  return (
    <div className="App">
      
      <UserForm updateUsers={updateUsers} />
      <UserList users={users} />
 
    </div>
  );
}

export default App;
