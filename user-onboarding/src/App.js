import './App.css';
import * as yup from 'yup';
import axios from 'axios';
import Form from './form';
import {useEffect, useState} from 'react';
import schema from './schema';
import User from './User'

const initialValue = {
  username: '',
  email: '',
  password: '',
  tos: false,
}
const initialDisabled = true;

function App() {

  const [value, setValue] = useState(initialValue)
  const [users, setUsers] = useState([])
  const [disabled, setDisabled] = useState(initialDisabled);
  
const postNewUser = (newUser) => {
  axios
    .post('https://reqres.in/api/users', newUser)
    .then(res => {
      console.log(res)
      setUsers([res.data, ...users])
      setValue(initialValue)
    })
    .catch(err => {
      console.log(err)
    })
  }
  const onSubmit = () => {
    const whatever = {
      username: value.username.trim(),
      email: value.email.trim(),
      password: value.password.trim(),
      tos: ['tos'].filter((item) => value[item]),
    }

    postNewUser(whatever)
  }
  const inputChange = (name, value1) => {
    setValue({...value, [name]: value1,});
  };

useEffect(() => {
  schema.isValid(value).then((valid) => {
    console.log(value)
    setDisabled(!valid)
  })
}, [value])

  return (
    <div className="App">
      <Form 
      values={value}
      change={inputChange}
      submit={onSubmit}
      disabled={disabled}/>
      {users.map((user, idx) => {return <User key={idx} values={user} />})}
    </div>
  );
}

export default App;
