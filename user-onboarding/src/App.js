import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
const initialState = {
  username: '',
  email: '',
  skills: '',
  civil: ''
}

const initialFriends = [];
function App() {

const [friends, setFriends] = useState(initialFriends)
const [formValues, setFormValues] = useState(initialState)

const change = (evt) => {
  const { value, name } = evt.target
  setFormValues({...formValues, [name]: value})
}


const submit = (evt) => {
  evt.preventDefault();
  const newFriend = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    skills: formValues.skills.trim(),
    civil: formValues.civil.trim(),
  }

setFriends(friends.concat(newFriend));
setFormValues(initialState)
}

  return (
    <div className="App">
      <header className="App-header">
      <div className = "friends">
        {friends.map((person, idx) =>(
          <div key={idx}>
          {person.username.toUpperCase()} certifications: {person.skills.toUpperCase()} contact: {person.email}

          </div>
        ))}
        <form onSubmit={submit}>
        <label className='username'>Username: </label>
        <input 
        value={formValues.username}
        onChange={change}
        name="username"
        type="text"
        placeholder="enter desired username"
        />
        <label className='email'>Email: </label>
        <input 
        value={formValues.email}
        onChange={change}
        name="email"
        type='text'
        placeholder='enter email'
        />
        <label className='skills'>Skills: </label>
        <input 
        value={formValues.skills}
        onChange={change}
        name='skills'
        type='text'
        placeholder='enter your skills here'
        />
        <button>Create Associate</button>
        <div className='civil'>
          Marital Status
        </div>
        <label>
          Single
          <input 
          type='radio'
          name='civil'
          value='single'
          onChange={change}
          />
        </label>
        <label>
          Married
          <input 
          type='radio'
          name='civil'
          value='married'
          onChange={change}
          />
        </label>
        </form>
      </div>
      </header>
    </div>
  );
}

export default App;
