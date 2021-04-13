import './App.css';
import { v4 } from 'uuid'
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from "./components/validation/Schema"
//imported our router-dom hooks
import { Route, Switch } from 'react-router-dom' 

import axios from 'axios';

//components
import UserCard from "./components/UserCard"
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
import Users from './components/Users'

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
        console.log("app.js props submitee: ", submitee)
        
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
        {/* Header will stay on the screen 100% of the time.  "static"*/}
      <Header />


      {/* Use a switch to navigate between components. Renders one at a time. */}
      <Switch>
        {/* Add a route then create a path(choose any name, symantic or relating to the component/page you want) */}
        <Route path="/O/:id">
          {/* Add component between route */}
          <UserCard submitee={submitee} first_name={submitee.first_name} last_name={submitee.last_name}/>
        </Route>

        <Route path="/login">
          {/* LoginForm */}
          <Form
          values={formValues}
          onChange={onChange}
          newSubmitionForm={newSubmitionForm}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>

        <Route path="/users">
          <Users submitee={submitee}/>
        </Route>

        <Route path="/">
          <div>
            <h1> This is the home page. </h1>
          </div>
        </Route>

       </Switch>

      <Footer />
    </div>
  );
}


