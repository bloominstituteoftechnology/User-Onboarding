import React, { useState, useEffect } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Styled from "styled-components"; 

const CenterContent = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: lightgray; 
`
// const Background = Styled.div`

// `

//Brought to you today by Noah Franco and Jessica Morrison

function App() {

  return (
    <div>
      <CenterContent> 
      <UserForm />
      </CenterContent>
    </div>
  );
}

export default App;
