import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"

const initialValues = {
  //Text fields
  name: "",
  email: "",
  password: "",
  //Checkbox
  terms: false,
}


function App() {
  return (
    <div className="App">
     <Form />
    </div>
  );
}

export default App;
