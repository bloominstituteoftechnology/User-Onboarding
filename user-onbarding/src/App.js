import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import * as yup from "yup";
import axios from "axios";
import schema from "./Components/FormSchema";

const initalFormUsers = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const initalFormErrors = {
  name: "",
  email: "",
  password: "",
};

const initialUsers = [];
const inititialDisabled= true

function App() {
  const [formUser, setFormUser] = useState(initalFormUsers);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(inititialDisabled)
  
  useEffect(() =>{
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log('Hello',res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  })
  
  
    const postNewUser = (newUser) => {
      axios
        .post("https://reqres.in/api/users", newUser)
        .then((res) => {
          console.log(res);
          setUsers([res.data, ...users]);
          setFormUser(initialUsers);
        })
        .catch((err) => {
          console.log(err, "error");
        });
    };

    const inputChange = (name, value) =>{
      yup.reach(schema, name)
      .validate(value)
      .then(() =>{
        setFormErrors({
          ...formErrors,
          [name]:'',
        })
      })
      .catch((err) =>{
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
      })
      })

      setFormUser({
        ...formUser,
        [name]: value
      })
  }

    const userSubmit = () =>{
      const newUser = {
        name: formUser.name.trim(),
        email: formUser.email.trim(),
        terms: formUser.terms.trim(),
      }
      postNewUser(newUser);
    }


    useEffect(() =>{
      schema.isValid(formUser).then((valid) =>{
        setDisabled(!valid);
      })
    }, [formUser])
  
  return (
    <div className="App">
        <h1>User Onboarding</h1>
      <Form
        values={formUser}
        change={inputChange}
        submit={userSubmit}
        disabled={disabled}
        errors={formErrors}      
      />
      <div>
        {users.map((user) =>{
          console.log(user);
          return(
            <div>
            <div>{user.first_name}</div>
            <span>{user.last_name}</span>
            <div>{user.email}</div>
            
        </div>
          )
        })}
      </div>
    </div>
  );
      

}    

export default App;
