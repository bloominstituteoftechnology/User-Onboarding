import React, { useState } from 'react';
import logo from './logo.svg';
import Form from './components/Form'
import './App.css';


function App() {
  
  const [users, setUsers] = useState([]);

  return (
      <div className="App">
        <Form users={users} setUsers={setUsers}/>
      </div>
    );
  }



export default App;
