
import './App.css';
import React, {useState} from 'react'
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form'

const schema = yup.object().shape({
  username: yup
  .string()
  .email('valid username')
  .required('must include username'),
  email: yup
  .string()
  .email('valid email address')
  .required('must include email'),
  password: yup
  .string()
  .email('valid password')
  .required('must include password')
  .min(6, 'password must be at least 6 characters long')

})

const initialFormValues ={
  username: '',
  email: '',
  password: '',

}

function App() {

  const [formValues, setFormValues]= useState(initialFormValues)

  const updateForm =(inputName, inputValue) =>{
    setFormValues({...formValues, [inputName]: inputValue})

    
  }

  const submitForm = () =>{
const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
}


    axios
        .post(`https://reqres.in/api/users`, newUser)
        .then((res) => {
          console.log(res.data)
          const getUser = res.data;
        // set res.data as a user state and render it as HTML pre-tag



        })
  }


  return (
    <div className="App">
      <h1>User Onboarding</h1>
      <Form update={setFormValues} values={formValues} submit={submitForm}/>

      
    </div>
  );
}

export default App;
