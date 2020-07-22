import React from 'react';
import Form from './Form';
import {BrowserRouter as Router} from 'react-router-dom'
import "./App.css"

function App() {

  return (
    <div className="App">
      <Router>
          <Form  />
      </Router>
    </div>
  );
}

export default App;
