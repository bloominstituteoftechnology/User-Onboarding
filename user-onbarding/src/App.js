import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import * as yup from "yup";
import axios from "axios";
import schema from "./Components/FormSchema";
import User from "./Components/User"

const initalFormUsers = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const initalFormErrors = {
  username: "",
  email: "",
  password: "",
};

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
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  },[])
  
  
    const postNewUser = (newUser) => {
      axios
        .post("https://reqres.in/api/users", newUser)
        .then((res) => {
          console.log("Hello",res);
          setUsers([res.data, ...users]);
          
        })
        .catch((err) => {
          console.log(err, "error");
        });
    };

    const inputChange = (name, value) =>{
      // yup.reach(schema, name)
      // .validate(value)
      // .then(() =>{
      //   setFormErrors({
      //     ...formErrors,
      //     [name]:'',
      //   })
      // })
      // .catch((err) =>{
      //   setFormErrors({
      //     ...formErrors,
      //     [name]: err.errors[0],
      // })
      // })

      setFormUser({
        ...formUser,
        [name]: value
      })
  }

    const userSubmit = () =>{
      const newUser = {
        username: formUser.username.trim(),
        email: formUser.email.trim(),
        password: formUser.password.trim(),
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
        <h1>Users Onboarding</h1>
      <Form
        values={formUser}
        change={inputChange}
        submit={userSubmit}
        disabled={disabled}
        errors={formErrors}      
      />
      <div>
        {users.map((user) =>{
          // console.log(user);
          return(
            <User key={user.id} details={user} />
          )
        })}
      </div>
    </div>
  );
      

}    

export default App;
