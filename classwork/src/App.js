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
  width: 90%;
  margin: auto;
  padding-top: 5%;
  text-align: center;
  border-left: 1px solid whitesmoke;
  border-right: 1px solid whitesmoke;
  border-top: 1px solid whitesmoke;
  border-radius: 10px;
  box-shadow: whitesmoke 1px 1px 10px;
  flex-wrap: wrap;
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

.lastDiv{
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  
}
.generalInfo{
  text-align: center;
}
`

function App() {
  return (
    <StyledForm>
      <h1 className='title'> Welcome To The Hoo! </h1>
      <h3 className='generalInfo'>Create your profile below.</h3>
  
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
          <label>
            <input type='number' name='number'/>
          </label>
       </div>

       <div className='lastDiv'>
         <label> Have you read the terms and conditions!?
           <input type='checkbox' />
         </label>
         <input type='submit'/>
       </div>

        </div>
      </form>
    </StyledForm>
  );
}

export default App;
