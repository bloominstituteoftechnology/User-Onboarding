import React,{ useState, useEffect } from 'react';
import axios from 'axios'
import schema from './validation/formSchema';
import './App.css';
import UserForm from './components/Form';
import {reach} from 'yup/lib'

const initialFormValues = {
  name:'',
  email:'',
  password:'',
  termsOfService: false
}

const initialFormErrors = {
  name: '',
  email:'',
  password:'',
}

const initialUsers = [];
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers =  () => {
    axios.get('https://reqres.in/api/users')
        .then(response=>{
          // console.log(response.data.data)
          setUsers(response.data.data)
          // console.log(users)
        })
        .catch(err =>{
          console.error(err)
        })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
        .then(res =>{
          setUsers([res.data, ...users])
          // console.log(users)
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          setFormValues(initialFormErrors)
        })
  }

  const validate = (name, value) => { 
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]:''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange =(name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = ()=> {
    const newUser = {
      first_name:formValues.first_name.trim(),
      email:formValues.email.trim(),
      password:formValues.password.trim(),
      Terms:['agree','disagree'].filter(terms => formValues[terms] === true)
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(()=>{
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
      <div className="App">
        <header className="App-header"><h1>Welcome to my App. Now give me all of your info! Muahahahaha 😈</h1></header>
        <UserForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
        />
        {
          users.map(user =>{
            return(
                <UserForm key={user.id} details={user}/>
            )
          })
        }
      </div>
  )
}
