import React, { useState, useEffect, useImperativeHandle } from "react";
import "./App.css";
import Form from "./component/Form.js";

function App() {
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')
  const [tofService, setTofService] = useState('')
  const [btn, setBtn] = useState([]);

  const handleUser = (evt) => {
    setUsername(evt.target.value);
  };

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handleButton = () => {
    setBtn([...btn, {username:username, email:email}]);
  };

  const handlePassword = (evt) => {
    setPassword(evt.target.value)
  }

  const handletofS =(evt) => {
    setTofService(evt.target.value)
  }

  return (
    <div className="App">
      <header>
        <h1>Alien Form</h1>
      </header>
      <Form
        handleUser={handleUser}
        handleEmail={handleEmail}
        handleButton={handleButton}
        handlePassword={handlePassword}
        handletofS={handletofS}
      />
      {btn.map((info, index) => {
        return (
          <div key={index}>
            {info.username} {info.email} {info.password} 
          </div>
        );
      })}
    </div>
  );
}

export default App;
