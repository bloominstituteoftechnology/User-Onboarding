import './App.css';
import Form from "./components/Form"
import {useState, useEffect} from 'react'
import axios from 'axios';
import * as yup from "yup"
import formSchema  from "./validation/formSchema"

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
  
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialDisabled = true

function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled) 

  const postNewUser = newUser=> {
    axios.post(`https://reqres.in/api/users`, newUser)
         .then(res => {
           setUsers([res.data, ...users])
           setFormValues(initialFormValues)
         })
         .catch(err => {
           console.log(err)
         })
  }

  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })

    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms,
    }
    postNewUser(newUser)
    console.log(newUser)
  }


  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])
  
  return (
    <div className="App">
      <header className="App-header">
        <Form values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>
      </header>
      {
        users.map(user => {
          return (
            <div details={user}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
