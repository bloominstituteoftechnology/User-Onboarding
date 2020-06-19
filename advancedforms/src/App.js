import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form.js";

function App() {


  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });






  return (
    <div className="App">
      <h1>
        {" "}
        <span>💜 </span>Welcome To Onboading. <br />
        Please fill out this form! <span>👾 </span>
      </h1>
      <Form formState={formState} setFormState={setFormState}/>
    </div>
  );
}

export default App;
