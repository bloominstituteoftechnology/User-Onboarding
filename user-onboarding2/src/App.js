import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MemberForm from "./Form";
import axios from 'axios'




function App() {
  // 1b
  const [formValues, setFormValues]=useState()
  // 1d
  const [data, setData]=useState([])
  
// 1c
    const onInputChange = event => {
      setFormValues({...formValues, [event.target.name]: event.target.value})
    }

 // 1d 
    const onSubmitHandler = event => {
      event.preventDefault()
      axios.post(`https://reqres.in/api/users`, formValues)
      .then(response => {
        setData(response.data)
      }) 

      .catch(error => {
        console.log(error)
      })
    }


  return (
    <div className="App">
     <MemberForm onSubmitHandler={onSubmitHandler} onInputChange={onInputChange} value={formValues} data={data}/>
    </div>
  );
}

export default App;
