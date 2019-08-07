import React from "react";
import FormikForm from "./components/UserForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User On-Boarding Form</h1>
      </header>

      <FormikForm />
    </div>
  );
}

export default App;
