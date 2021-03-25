import './App.css';
import * as yup from 'yup';
import axios from 'axios';
import Form from './form';
import {useState} from 'react';

function App() {

  const initialValue = {
    username: '',
    email: '',
    password: '',
    tos: false,
  }
  const onSubmit = () => {
    const whatever = {
      username: value.username,
      email: value.email,
      password: value.password,
      tos: ['tos'].filter((accept) => value[accept]),
    }
    setNewUser([...newUser, whatever])
    setValue(initialValue)
    console.log(newUser)
  }
  const inputChange = (name, value) => {
    setValue({...value,[name]: value,});
  };

  const [value, setValue] = useState(initialValue)
  const [newUser, setNewUser] = useState([])

  return (
    <div className="App">
      <Form 
      values={value}
      change={inputChange}
      submit={onSubmit}/>
    </div>
  );
}

export default App;
