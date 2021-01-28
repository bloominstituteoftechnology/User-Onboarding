import logo from './logo.svg';
import React, {useState, useEffect} from "react"
import './App.css';
import Forms from "./Forms";
import axios from "axios";
import * as yup from "yup";



const initialFormValues = {
  name:"",
  email:"",
  password:"",
  state:"",
  pizza:false,
  tacos:false,
  burgers:false
}

const initialFormErrors = {
  name:"",
  email:"",
  password:"",
  state:"",
}

const initialMembers = []
const initialDisable = true


function App() {


    const [members, setMembers] = useState(initialMembers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disable, setDisable] = useState(initialDisable)

    const getMember = () => {
      axios
        .get(`https://reqres.in/api/users`)
        .then(res => {
          console.log(res)
          setMembers(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }

    const postNewMember = newMember => {
      axios
        .post(`https://reqres.in/api/users`)
        .then(res => {
          setMembers(...members,res.data)
          setFormValues(initialFormValues)
        })
        .catch(err => {
          console.log(err)
        })
    }









  return (
    <div className="App">
      <header className="App-header">
        <Forms/>
      </header>
    </div>
  );
}

export default App;
