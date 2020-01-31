import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import FormikForm from './components/form.js';
import Axios from 'axios';


function App(props) {
  const [user, setUser] = useState([]) 

    useEffect(() => {
      Axios 
      .get("https://reqres.in/api/users")
      .then(res => {
        console.log(res);
        setUser(res.data.data)
      })
      .catch(err => {
        console.log("failed to load", err)
      });
    },[]);
    const Card = (props) => {
      console.log(props);
      return (
        <div className="usersInfo">
          {props.user.map(info => (
            <div >
              <h2 className="users" key={user.id}>{info.username}</h2>
              <p className="email" key={user.email}>{info.email}</p>
              <p className="password" key={user.password}>{info.password}</p>
            </div>
          ))}
        </div>
      ), []}};
      
      export default App;