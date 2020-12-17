import React , {useState, useEffect} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import * as yup from 'yup'
import schema from "./validation/formSchema";

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  read:false
};
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  read: "",
};
const initialUsers = []
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers); // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean


  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const postUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      Read: formValues.read
    };

    postUser(newUser);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      console.log("valid", valid)
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}/>
      </header>
    </div>
  );
}

export default App;
