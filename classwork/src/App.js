import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';


const StyledForm = styled.div`
border: 1px solid whitesmoke;
background-color: #4CB1B3;
box-shadow: whitesmoke 4px 20px 20px;
height: 80vh;
width: 85%;
margin: auto;
margin-top: 9%;
color: whitesmoke;


.title{
  color: whitesmoke;
  text-align: center;
}

.content{
  display: flex;
  justify-content: space-evenly;
  height: 50vh;
  text-align: center;
}

.divOne {
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  
}

.divThree {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.musicChoice{
  display:
}
`

function App() {
  return (
    <StyledForm>
      <h1 className='title'> Welcome To Hoo! </h1>
      <h3 className='musicChoice'>General Information</h3>
      <h3 className='musicChoice'>Pick a Genre of music</h3>

      <form>
        <div className='content'>

        <div className='divOne'>
          <label>Username
            <input type='text' name='username'/>
          </label>
          <label>Add Email
            <input type='email' name='email'/>
          </label>
          <label>Password
            <input type='password' name='password'/>
          </label>
          <select>
            <option>-- Please Select A Gender --</option>
            <option>-- Male --</option>
            <option>-- Female --</option>
          </select>
        </div>
       
       <div className='divThree'>
        <label>Over 18
            <input type='radio' name='age'/>
          </label>
          <label>Under 18
            <input type='radio' name='age'/>
          </label>
          <label>Number
            <input type='number' name='number'/>
          </label>
       </div>
        </div>
      </form>
    </StyledForm>
  );
}

export default App;
