import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';


const StyledForm = styled.div`
border: 1px solid black;
height: 40vh;
width: 75%;
margin: auto;
margin-top: 20%;
`

function App() {
  return (
    <StyledForm>
      <h1 className='title'> Sign Up for The Hoo App </h1>
      <h3 className='generalInfo'>General Information</h3>
      <h3 className='musicChoice'>Pick a Genre of music</h3>
      <form>
        <input type='text' name='username'/>
        <input type='email' name='email'/>
        <select>
          <option>-- Please Select A Gender --</option>
          <option>-- Male --</option>
          <option>-- Female --</option>
        </select>
        <input />
        <input/>
        <input/>
        <input/>
        <input/>
      </form>
    </StyledForm>
  );
}

export default App;
