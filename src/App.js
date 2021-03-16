import logo from './logo.svg';
import './App.css';
import Form from "./Form"
import React,{useState} from "react"

const initialFormValues = {
  name:"",
  email:"",
  password:"",
  terms: false
}

function App() {

  const [formValues, setFormValues] = useState({initialFormValues});
  const [formErrors, setFormErrors] = useState()
  

  function inputChange(){

  }
  function formSubmit(){

  }

  function disabled(){

  }
  

  return (
    <div>
      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
    </div>
  );
}

export default App;

