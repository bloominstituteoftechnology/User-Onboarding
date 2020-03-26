import React, { useState, useEffect } from 'react'
import {v4 as uuid} from 'uuid';
import './App.css';
import Form from './components/Form';

  
  function App() {

  
      return (
  
        <div className="App">
        <h1>
          User SignUp
        </h1>  
          
          <Form/>
        </div>
      );
  }
  
  export default App;


 /* const newUser = {
    id: uuid(),
    fname: formValues.fname,
    lname: formValues.lname,
    email: formValues.email,
    terms: formValues.terms
  }

  setUsers([...users, newUser]);
}*/ /*var usersArray = [
  ];*/