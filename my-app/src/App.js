import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FormikForm from './components/form.js';

function App(props) {
  const [user, setUser] = useState([]) 

    return (
      <div className="usersInfo">
        {props.user.map(info => (
          <div className="users" key={user.id}>
            <h2>{info.username}</h2>
            <p>{info.email}</p>
            <p>{info.password}</p>
          </div>
        ))}
      </div>
    )
  };
  


export default App;
