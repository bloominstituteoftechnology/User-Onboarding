import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import formSchema from './FormSchema'
import * as yup from 'yup';
import Form from './Form'

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialDisabled = true


function App() {
  
  const [users, setUsers] = useState([])
  const [formV, setFormV] = useState(initialValues)
  const [formE, setFormE] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      console.log(res.data.data)
      setUsers(res.data.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([...users, res.data])
      console.log(res.data.data)
    })
    .catch(err => {
      console.log(err);
    })
    setFormV(initialValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormE({...formE, [name]: ''})
      })
      .catch(err => {
        setFormE({...formE, [name]: err.errors[0]})
      })
    setFormV({
      ...formV,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formV.first_name.trim(),
      last_name: formV.last_name.trim(),
      email: formV.email.trim(),
      password: formV.password.trim(),
      termsOfService:formV.termsOfService,
    }
    postNewUser(newUser)
  }  

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formV).then(valid => setDisabled(!valid))
  }, [formV])



  return (
    <div className="App">
      <header className="App-header">
       <h1>Users</h1>
       {users.map((user, idx) => {
        return (
          <div key={idx}>
            <p>Name: {`${user.first_name} ${user.last_name}`}</p>
            <p>Email: {user.email}</p>
            
          </div>
          )
        })
        }
        
        <Form 
          values={formV}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formE} />
      </header>
    </div>
  );
}

export default App;
