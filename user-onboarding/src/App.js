import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// Importing component 
import Form from './Component/Form';

////////// INITIAL STATES ///////////
const initialFormValues = {
      //text inputs//
    name: '',
    email: '',
    password: '',

      //check button//
    termsofservice: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: ''
}

function App() {
      ///////////STATES///////////////
  const [user, setUser] = 




  return (
    <div className="App">

    </div>
  );
}

export default App;
