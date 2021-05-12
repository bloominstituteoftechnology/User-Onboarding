import Form from './components/Form';
import User from './components/User'
import { useState, useEffect } from 'react';
import * as yup from "yup";
import { schema } from './validation/formSchema';
import './App.css';
import axios from 'axios';


function App() {

  /* -------------------------- STATE -------------------------- */
  /* -------------------------- STATE -------------------------- */
  /* -------------------------- STATE -------------------------- */

  const [users, setUsers] = useState(userStart);
  const [formValues, setValues] = useState(formValueStart);
  const [formErrors, setFormErrors] = useState(errorsStart);
  const [disabled, setDisabled] = useState(disabledStart);


  /* -------------------------- HELPERS -------------------------- */
  /* -------------------------- AXIOS -------------------------- */
  /* -------------------------- PLUS -------------------------- */
const getUsers = () => {
  axios
    .get("https://reqres.in/api/users")
    .then(({data}) => setUsers(data))
    .catch((error) => console.log("Error retrieving User:", error));
};





  /* -------------------------- HANDLERS -------------------------- */
  /* -------------------------- HANDLERS -------------------------- */
  /* -------------------------- HANDLERS -------------------------- */


 /* -------------------------- CHANGE -------------------------- */

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() =>
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      )
      .catch((err) =>
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      );
      setValues({
      ...formValues,
      [name]: value 
    });
  };
 /* -------------------------- SUBMIT -------------------------- */

  const formSubmit = (event) => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    setUsers([...users, newUser]);
  }

 /* -------------------------- SUBMIT  -------------------------- */
 
  return (
    <div className="App">
      <Form values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>

      {users.map((user)=> {
        return <User key={user.id} info={user}/>
      })}
    </div>
  );
}

export default App;



//Initial States

const formValueStart = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const userStart = [];

const disabledStart = true;

const errorsStart = {
  name: '',
  email: '',
  password: '',
}