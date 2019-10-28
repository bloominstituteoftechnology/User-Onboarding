import React from 'react';

import UserForm from './components/UserForm';


import styled from "styled-components";
import './App.css';

const Output = styled.div`

h1 {
  font-size: 5rem;
}

`;

function App() {
  return (
    <div className="App">
      <Output>
        <UserForm />
        
      </Output>
    </div>
  );
}

export default App;
