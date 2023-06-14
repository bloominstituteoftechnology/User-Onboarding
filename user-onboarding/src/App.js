import './App.css';
import Form from "./Components/Form";
import { useState, useEffect } from 'react';
import formSchema from './validation/formSchema';
import * as yup from "yup"
import axios from "axios"

const initialForm = {
  username: "",
  password: "",
  email: "",
  tos: false
}

const initialErrorForm = {
  username: "",
  password: "",
  email: "",
  tos: ""
}

function App() {
  const [form, setForm] = useState(initialForm);
  const [errorForm, setErrorForm] = useState(initialErrorForm);
  const [users, setUsers] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(true);

  const handleChange = (name, value) => {
    validate(name, value);
    setForm({...form, [name] : value})
  }

  const handleSubmit = (e) => {
    axios.post("https://reqres.in/api/users", form)
    .then(res => {
      setUsers([res.data, ...users]);
    }).catch(err => console.error(err));
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(setErrorForm({...errorForm, [name]: ""}))
    .catch(err => {
      setErrorForm({...errorForm, [name]: err.errors[0]})
    })
  }

  useEffect(() => {
    formSchema.isValid(form).then(valid => setSubmitStatus(!valid))
  }, [form])

  return (
    <div className="App">
        <Form values={form} change={handleChange} submit={handleSubmit} errors={errorForm} submitStatus={submitStatus}></Form>
        {users.map(element => (
          <div key={element.id}>
            <p>{element.createdAt}</p>
            <p>{element.email}</p>
          </div>
        ))}
    </div>
  );
}

export default App;