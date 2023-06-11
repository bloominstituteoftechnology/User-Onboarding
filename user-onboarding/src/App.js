import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form";
import { useState } from 'react';
import formSchema from './validation/formSchema';
import * as yup from "yup"

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  tos: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = () => {
    //
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ""})
    })
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  return (
    <div className="App">
        <Form values={formValues} change={handleChange} errors={formErrors}></Form>
    </div>
  );
}

export default App;
