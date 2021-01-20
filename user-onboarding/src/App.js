import React from "react";
import Form from "./Form.js";
import Logo from "./SONVR.svg"
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App d-flex justify-content-center" >
      <div className="form-card d-flex justify-content-center">
        <div className="player-trans">
          <img src={Logo} alt="sonar logo" style={{width: "40%"}}></img>
          <h3>Welcome to the new hire onboarding portal.</h3>
          <p>
           As part of your onboarding process please fill in the *required information below. 
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}