import React, { useState, useEffect } from "react";
import Form from "./Form";
import schema from "./formSchema";
import { reach } from "yup";
import axios from "axios";

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
};
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: "",
};
const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // setUsers([newUser, ...users]);
  const getUsers = () => {
    axios.get("https://reqres.in/api/users")
      .then(res => {
        console.log(res.data)
        setUsers(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  };

  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  };

  const validate = (name, value) => {
    reach(schema, name)
    .validate(value)
    .then(() =>setFormErrors({ ...formErrors, [name]: '' }
    ))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  };

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value 
    })
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: false,
    }
    postNewUser(newUser)
  };

  useEffect(() => {
    getUsers()
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {users.map(user => {

        return (
          <div>
            <h4>{user.username}</h4>
            <p>{user.email}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
