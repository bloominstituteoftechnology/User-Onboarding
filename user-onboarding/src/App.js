import React from 'react';
import axios from 'axios'; 
import * as yup from 'yup'; 
import Form from './Form';
import logo from './logo.svg';
import './App.css';

// INITIAL STATES // 
// Form Values // 
const initialFormValues = {
  name: '',
  email: '', 
  password: '', 
  ToS: {
    read: false;
  }
}
// Form errors // 
const initialFormErrors = {
  name: '', 
  email: '', 
  password: '', 
}
// Member list (array) and button disabled // 
const initialMembers = []; 
const initialDisabled = true;

function App() {
  return (
    <div>

    </div>
  );
}

export default App;
