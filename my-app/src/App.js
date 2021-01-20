import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

initialFormValues ={
  username: '',
  email: '',
  password: '',

}

function App() {

  const [formValues, setFormValues]= useState(initialFormValues)

  const updateForm =(inputName, inputValue) =>{
    setFormValues({...formValues, [inputName]: inputValue})

    
  }

  const submitForm = () =>{
const newUser = {
  username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
}

  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
