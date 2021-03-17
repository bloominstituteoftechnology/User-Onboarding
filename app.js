

import React from "react";
import Form from "./Form.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App container d-flex justify-content-center">
      <div className="form-card d-flex justify-content-center">
        <div className="users">  
        <h1>Users</h1>  
        <p> Add new Users</p>
            </div>
        <Form />
      </div>
    </div>
  );
}