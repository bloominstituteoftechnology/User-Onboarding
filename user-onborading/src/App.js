import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import React, {useState, useEffect} from 'react';
import * as yup from "yup"
import axios from 'axios'

const formSchema = yup.object().shape({
  username: yup.string().trim().required('Username is required').min(3, 'user must be at least 3 characters long'),
  email: yup.string().trim().email("please enter a valid email").required("email must be entered"),
  password: yup.string().required('please enter a valid password').min(5, "password must be at least 5 characters long"),
  tos: yup.boolean().oneOf([true], "you must accept the terms of service to proceed")
})




const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

const initialDisabled = false;

function App() {
  const validate  = (name,value) => {
    yup.reach(formSchema,name)
      .validate(value)
      .then(()=> setFormErrors({...formErrors,[name]: ''}))
      .catch(err => setFormErrors({...formErrors,[name]: err.errors[0]}))
  
  }
    
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors,setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([])
  const [disabled, setDisabled] = useState(initialDisabled)

  const changeHandler = (name,value) => {
    validate(name,value)
    setFormValues({...formValues, [name]: value});
  }

  useEffect(()=>{
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  },[formValues])

  const submitHandler = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(({data}) => setUsers([data, ...users]))
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
    
  }

  return (
    <div className='App'>
      <Form values={formValues}
        change={changeHandler}
        submit={submitHandler}
        errors={formErrors}
        users={users}
        disabled={disabled}
          />
    </div>
  );
}

export default App;
