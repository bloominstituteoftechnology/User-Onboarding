import React, { useState } from 'react';
import Form from './Form';
import Users from './Users'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  const [user,setUser] = useState([]);

  return (
    <div className="App">
      <Router>
          <Form  />
          <Users  />
      </Router>
    </div>
  );
}

export default App;
