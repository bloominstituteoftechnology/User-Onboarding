import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import Styled from "styled-components"

const SuperContainer = Styled.div`
display: flex;
flex-wrap: wrap;
width: 80%;
margin: 5%;
border: 1px solid black;
padding: 5%
`
const SuperHeader = Styled.h1`
display: flex;
flex-wrap: wrap;
text-align:center;
color:white;
width:100%;

`
const HeaderDiv = Styled.div`
background-color: blue;
width:100%;
margin-bottom: 3%;
`

function App() {
  return (
    <SuperContainer>
      <HeaderDiv>
      <SuperHeader>Sign Up Form</SuperHeader>
      </HeaderDiv>
      <Form />
    </SuperContainer>
  );
}

export default App;
