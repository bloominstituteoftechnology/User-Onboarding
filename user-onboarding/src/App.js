import React, { useState } from 'react';
import Form from './Form';
import './App.css';
import Users from './Users';



function App() {

  const [ users, setUsers ] = useState([
    {
      id: 1,
      user: "Shawn",
      email: "shawn.harrington2776@gmail.com",
      password: "oneTWOthree",
      role: "Backend Developer",
      tos: true,
    }
  ]);

  return (
    <div className="container">
      <div className="container-one">
        <Form />
        </div>
        <div className="container-two">
      <Users users={users}/>
      </div>
    </div>
  );
}

export default App;
