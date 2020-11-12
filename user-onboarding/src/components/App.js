import style from './App.css'
import React, { useState, useEffect } from "react";
import FriendForm from "./Form";
import axios from "axios";
import * as yup from "yup";
import schema from "./formSchema";
import Friend from "./Friend";

const initialFormValues={
  first_name:'',
  email:'',
  password:'',
  terms:false,
}
const initialFormErrors ={
  first_name:'',
  email:'',
  password:'',
  terms:'',
}
const intiialFriends=[]
const initialDisabled = true;


function App() {
  const [friends, setFriends] = useState(intiialFriends)
  const [formValues, setFormValues] =useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors); 
  const [disabled, setDisabled] = useState(initialDisabled);

  const getFriends = () => {
    axios.get('https://reqres.in/api/users')
    .then((res)=>{
      setFriends(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const postNewFriend =(newFriend) =>{
    axios.post('https://reqres.in/api/users', newFriend)
    .then((res)=>{
      setFriends([res.data,... friends])
      setFormValues(initialFormValues)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const inputChange = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(()=>{
      setFormErrors({
        ...formErrors,
        [name]:"",
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });
  setFormValues({
    ...formValues,
    [name]: value,
  });
  }
  const formSubmit = ()=>{
    const newFriend = {
      first_name:formValues.first_name.trim(),
      email:formValues.email.trim(),
      password:formValues.password.trim(),
    }
    postNewFriend(newFriend)
  }
  useEffect(() => {
    getFriends();
  }, []);
useEffect(()=>{
  schema.isValid(formValues).then((valid)=>{
    setDisabled(!valid)
  })
}, [formValues])



  return (
    <div className="App">
      <header>
        <h1>New User Input</h1>
      </header>
      <FriendForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {friends.map((friend) => {
        return <Friend key={friend.id} details={friend} />;
      })}
  
    </div>
  );
}

export default App;
