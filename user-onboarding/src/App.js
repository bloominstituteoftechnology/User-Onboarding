import React from 'react';
import FormikUserForm from './Components/UserForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testing</h1>
      <FormikUserForm  user="name"/>
    </div>
  );
}

export default App;
