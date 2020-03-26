import React from "react";
import "./App.css";
import Form from "../src/Components/Forms";
import GForm from "../src/Components/GForm";

function App() {
  return (
    <div className="App">
      <h1>My Form </h1>
      <Form />

      <h1> Gracee's form!!</h1>
      <GForm />
    </div>
  );
}

export default App;
