import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import schema from './components/Schema'
import axios from 'axios'
import * as yup from 'yup'


const initialFormValues = {
  name:'',
  email: '',
  password: '',
  service: false,
}
const initialFormErrors = {
  name:'',
  email: '',
  password: '',
}

const initialForm = []
const initialDisabled = true

function App() {

  const [person, setPerson] = useState(initialForm)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [ disabled, setDisabled] = useState(initialDisabled)
  const [ formErrors, setFormErrors] = useState(initialFormErrors)


  const postNewPerson = newPerson =>{
    axios
    .post('https://reqres.in/api/users', newPerson)
    .then((res) => {
      setPerson([res.data, ...person])
      setFormValues(initialFormValues)
    })
    .catch((err) =>{
      console.log(err)
    })
  };
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
      [name]: value 
    })
  }

  const onSubmit = () =>{
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password:formValues.password.trim(),
      services: ['service'].filter(
        (service) => formValues[service]
      )
    }
    postNewPerson(newPerson)
  };

  useEffect(() => {
    schema
    .isValid(formValues)
    .then((valid) => {
      setDisabled(!valid);
    })
  }, [formValues]);

  return (
    <div className="App">
      <header><h1>People Form</h1></header>

      <Form 
        values={formValues}
        change={inputChange}
        submit={onSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
