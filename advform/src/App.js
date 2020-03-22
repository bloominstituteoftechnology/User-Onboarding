import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Form from "./components/Form";
import DisplayForm from "./components/DisplayForm";


function App() {
  const [newUserState, setNewUserState] = useState([
    {
      name: "Matthew Castillo",
      email: "Blacksheep3y@gmail.com",
      password: "SecretPass"
    }
  ]);

  const newUserHandler = newUser => {
    console.log("adding new user", newUser);
    setNewUserState([...newUserState, newUser]);
    //Update the state.
  };

  // useEffect(() => {
  //   axios
  //     .get('https://reqres.in/api/users')
  //     .then(res => console.log('RES.DATA:', res.data.data))
  //     .catch(err => console.log('user Fail', err))
  // }, [])

  return (
    <div className="App">
        <Form addUser={newUserHandler} />
        <DisplayForm displayUser={newUserState} />
    </div>
  );
}

export default App;
