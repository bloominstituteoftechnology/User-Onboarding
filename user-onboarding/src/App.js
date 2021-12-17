import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import OnboardForm from './OnboardForm';

const initialState = {
  name: '',
  email: '',
  password: '',
  terms: false
}

const initialFriends = [];

function App() {

const [friends, setFriends] = useState(initialFriends)
const [formValues, setFormValues] = useState(initialState)

const getFriends = () => {
  axios.get('https://reqres.in/api/users')
  .then(resp => {
    setFriends(resp.data);
  }).catch(err => console.error(err))
}

const postNewFriend = newFriend => {
  axios.post('https://reqres.in/api/users', newFriend)
  .then(resp => {
    setFriends([resp.data, ...friends])
  }).catch(err => console.error(err))
  .finally(() => setFormValues(initialState))
}


const change = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value
  })
}


const submit = (evt) => {
  evt.preventDefault();
  const newFriend = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
  }

  postNewFriend(newFriend)
}

useEffect(() => {
  getFriends()
}, [])

  return (
    <div className="App">
      <header className="App-header">
      <h1>Onboarding Form</h1>
      <OnboardForm 
      values={formValues}
      change={change}
      submit={submit}
      />
      </header>
    </div>
  );
}

export default App;
