import logo from './logo.svg';
import './App.css';
import Form from'./compo/form';
import { useEffect, useState } from 'react';
import * as yup from "yup";
import schema from "./schema";




function App() {
  const intialVal = {
    username:'',
    email:'',
    password:'',
    term: false,
  };
  const submitter= ()=>{

    const newUser = {
      username: value.username,
      email: value.email,
      password: value.password,
      term: ['term'].filter(accept => value[accept]),
  
  
    }
    console.log(newUser)
    postNewUser(newUser);
    
  }
  const inputChange = (name, oooo) => {
    // yup
    //   .reach(schema, name) 
    //   .validate(value) 
    //   .then(() => {
     
    //   })
    //   .catch((err) => {
    //    setError({...errors, [name]: err.errors[0]})
    //   });
    setValue(
      {
      ...value,[name]: oooo,
    });
    console.log(value)
  };




  const postNewUser = (newpers) =>{
    setNewUser([...newUser, newpers])
    console.log(value)
    setValue(intialVal)

  }
  const initialError = {
    username:'',
    email:'',
    password:'',
  };

  const [errors, setError] = useState(initialError)
  const [newUser, setNewUser] = useState([])
  const [value, setValue] = useState(intialVal);
  useEffect(()=>{console.log(newUser)},[newUser])
  useEffect(()=>{console.log(errors)},[errors])
  return (
    
    <div className="App">
      <h1> hello world</h1>
      <Form values={value} submit={submitter} change={inputChange} error={errors}/>
    </div>
  );
}

export default App;
