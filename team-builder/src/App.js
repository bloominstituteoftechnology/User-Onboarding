import './App.css';
import React, {useState, useEffect} from 'react'
import Form from './Form'
import Users from './Users'
import * as yup from 'yup'
import axios from "axios";
import formSchema from './formSchema';

const initialFormValues = {
  ///// TEXT INPUTS /////
  first_name:'',
  email:'',
  password:'',
  ///// CHECKBOXES /////
  term_of_Service: false,
}
const initialFormErrors = {
  ///// TEXT INPUT ERRORS /////
  first_name:'',
  email:'',
  password:'',
}
const initialUser = []
const initialDisabled = true

function App() {

  //////////////// STATES ////////////////
  const [user, setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)





  const getUser = () => {
    axios.get('https://reqres.in/api/users')
    .then(res=> {
      setUser(res.data.data)
      console.log(res.data.data)
    })
    .catch(err=> {
      console.log(err)
    })
   
  }

  const postNewUser= newUser => {
    axios.post('https://reqres.in/api/users',newUser)
    .then(res => {
      setUser([res.data, ...user])
    })
    .catch(err => {
      console.log(err);
    })
    setFormValues(initialFormValues)
  }






  const inputChange = (first_name,value) => {
    yup.reach(formSchema, first_name)
    .validate(value)
    .then(()=>{
      setFormErrors({...formErrors,[first_name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [first_name]: err.errors[0]})
    })
    setFormValues({
      ...formValues,
      [first_name]: value
    })
  }

  const formSubmit = () =>{
    const newUser = {
      first_name: formValues.first_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div classfirst_name="container">
      
      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
        
          
            
              <Users key={user.id} details={user}/>
            
          
        
    </div>
  );
}

export default App;
