import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from "./component/Form";
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <h1>Use the form to add new users. Entries will be displayed below:</h1>
      <UserForm />
    </div>
  )
}

export default App;
