import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App(props) {

  const [users, setUsers] = useState([]);

    const addUser = (user) => {

        const newUser = {
            fullname: user.fullname,
            email: user.email,
            password: user.password
        }
    
        setUsers([...users, newUser])
      }

  return (
    <div className="App">
      <header>
        <h1>Welcome aboard!!</h1>
        <h3>Please fill out the form below.</h3>
      </header>
      <Form addUser={addUser}/>
    </div>
  );
}

export default App;
