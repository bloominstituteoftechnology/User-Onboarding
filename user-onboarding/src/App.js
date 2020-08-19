import React, { useState, useEffect } from 'react';
import Form from './Form';
import './App.css';
import './Form.css';

const initialUser = {

}


function App() {

const [user, setUser] = useState([])




  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
