import './App.css';
import { v4 } from 'uuid'
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from "./components/validation/Schema"

import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
import axios from 'axios';

const initialValues = {
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  title:'',
  terms: false
}

const initialErrors ={
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  title:'',
}

export default function App() {

  const [submitee, setNewSubmitee] = useState([])
  const [formValues, setFormValues] = useState (initialValues)
  const [formErrors, setFormErrors] = useState (initialErrors)
  const [disabled, setDisabled] = useState(true)

  const newSubmitionForm = (event) =>{

      const newSubmitee = {
        first_name:formValues.first_name.trim(),
        last_name:formValues.last_name.trim(),
        email:formValues.email.trim(),
        title:formValues.title.trim(),
        terms:formValues.terms,
        id:v4()
      }
      postNewSubmitee(newSubmitee)
    }

    const postNewSubmitee = (newSubmitee) =>{
      axios
      .post(`https://reqres.in/api/users`, newSubmitee)
      .then((res)=>{
        setNewSubmitee([res.data, ...submitee])
        setFormValues(initialValues)
      })
      .catch((ERROR) => {
        console.log(ERROR)
      })
    }

  const onChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors,[name]: "",})
      })
      .catch((err) => {
        setFormErrors({...formErrors,[name]: err.errors[0],
        })
      })
    setFormValues({...formValues, [name]: value,})
  }
    useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

    return (
      <div className="App">
     <Header />
      <Form
      values={formValues}
      onChange={onChange}
      newSubmitionForm={newSubmitionForm}
      disabled={disabled}
      errors={formErrors}
      />
      {submitee.map(eachSubmitee => {
        return(
          <div key={eachSubmitee.id}>
            <p>{eachSubmitee.first_name}</p>
            <p>{eachSubmitee.last_name}</p>
            <p>{eachSubmitee.email}</p>
            <p>{eachSubmitee.title}</p>
            <p>{eachSubmitee.createdAt}</p>
          </div>
        )
      })}

      <Footer />
    </div>
  );
}


