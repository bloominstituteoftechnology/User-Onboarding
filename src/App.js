import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import {useState} from 'react'
import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  checked: false,
  
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  checked: '',
}

const change = (event) => {
  console.log("Hiya!")
}

const formSubmit = () => {
  console.log("Form submit actioned!")
}

const initialDisabled = true

function App() {
  const [users, setUsers] = useState({})
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled) 


  return (
    <div className="App">
      <header className="App-header">
        <Form values={formValues} change={change} submit={formSubmit} disable={disabled} errors={formErrors}/>
      </header>
    </div>
  );
}

export default App;
