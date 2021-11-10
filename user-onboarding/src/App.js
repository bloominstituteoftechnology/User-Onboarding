import React, { useState } from "react";
import "./App.css";
import userForm from "./components/userForm";

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsOfService: false,
};

const initialFormErrors = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  return (
    <div className='App'>
      <userForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
