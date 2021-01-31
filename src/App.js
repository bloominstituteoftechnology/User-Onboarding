import React from "react";
import Form from "./Form.js";
import Logo from "./SONVR.svg"
import "./App.css";
//import "bootstrap/dist/css/bootstrap.css";




export default function App() {






  return (
    <div className="App d-flex justify-content-center" >
      <div className="form-card d-flex justify-content-center container">
        <div className="player-trans d-flex justify-content-center container">
          <img src={Logo} alt="sonar logo" style={{width: "40%"}}></img>
          <h3>Welcome to the new hire onboarding portal.</h3>
          <p>
          To begin the new hire onboarding process please fill in the *required information below. 
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}