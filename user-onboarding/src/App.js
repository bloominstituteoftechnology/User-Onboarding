import React, { useState, useEffect } from 'react'
import Form from './Components/Form'
import './App.css';
import axios from 'axios'
// import schema from '../src/Components/formSchema'
import * as yup from 'yup'



const initialFormValues = { // object for our users
  fname: '',
  lname: '',
  email: '',
  password: '',
  agree:'false',
  disagree:'false',
}

const initialFormErrors ={ //object for our errors
  fname:'',
  lname:'',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true

export default function App() {


const [users, setUsers] = useState(initialFormValues); //state for our users
const [formErrors, setFormErrors] = useState(initialFormErrors); //state for our errors
const [disabled, setDisabled] = useState(initialDisabled);





  return (
    <div className="App">
      <header><h1>Hello World!</h1></header>
      <Form />
    </div>
  )
}