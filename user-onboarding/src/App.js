import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

import Form from './Form';

import schema from '../src/Validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';

const initialFormVals = {
  name: '',
  email: '',
  password: '',
  terms: false,
  //submit: '' -- dont think you need this one
}
//do the errors here
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialPerson =[]
const initialDisabled = true;



function App() {
  const [people, setPeople] = useState(initialPerson);
  const [formVals, setFormVals] = useState(initialFormVals);
  const [formErrs, setFormErrs] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);





  //Axios here








  
  const formSubmit = () => {
    const newPerson = {
      name: formVals.name.trim(),
      email: formVals.email.trim(),
      password: formVals.password.trim(), // ----- this should probably not be shown the more i think about it
      //maybe add some of the hobbies here?
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
      <Form
         values=''
         errors=''
         submit={formSubmit}
         /> {/* will need to pass in the props? */}
    </div>
  );
}

export default App;
