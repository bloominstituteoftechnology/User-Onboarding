import React, { useState, useEffect } from 'react';
import './App.css';
import UserForm from './components/UserForm';

//Brought to you today by Noah Franco and Jessica Morrison

function App() {

  

  useEffect(() => {
      
        console.log("Hello World");          
           
  });

  return (
    <div>
      <UserForm />
    </div>
  );
}

export default App;
