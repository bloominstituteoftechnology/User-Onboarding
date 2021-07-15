import './App.css';
import React, { useState } from 'react'
import Form from './components/Form'
import Users from './components/Users'


function App() {

  const [users, setUsers] = useState([])

  return (
    < div className="App" >
      <Form users={users} setUsers={setUsers} />
      <Users users={users} />
    </div >
  );
}

export default App;
