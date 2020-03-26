import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import Styled from "styled-components"

//styling

const AllContainer = Styled.div`
display: flex;
justify-content:center;
`

const SuperContainer = Styled.div`
display: flex;
flex-wrap: wrap;
width: 50%;
margin: 5%;
border: 1px solid black;
padding: 5%;
background-image: linear-gradient(to bottom right, lightCyan, royalBlue);
box-shadow: 10px 10px 8px #888888;
border-radius: 0 50px 0 30px;
`
const SuperHeader = Styled.h1`
display: flex;
flex-wrap: wrap;
justify-content:center;
color:white;
width:100%;
`
const HeaderDiv = Styled.div`
background-color: royalBlue;
width:100%;
margin-bottom: 3%;
border-radius: 20px;
box-shadow: 5px 8px 12px Navy;
`

function App() {
  return (
    <AllContainer>
    <SuperContainer>
      <HeaderDiv>
      <SuperHeader>Sign Up Form</SuperHeader>
      </HeaderDiv>
      <Form />
    </SuperContainer>
    </AllContainer>
  );
}

export default App;
