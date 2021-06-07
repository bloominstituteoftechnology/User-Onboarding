import React, { useState } from 'react'
import Form from './components/Form'
import UserList from './components/UserList'

function App() {

  const defaultUser = {
    name: '',
    password: '',
    email: '',
    termOfUse: false,
  }
  
  const [ user, setUser ] = useState(defaultUser)
  const [ listOfUsers, setListOfUsers ] = useState([]) 
  
  const userForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const reactSubmit = () => {
    setListOfUsers([...listOfUsers, user])
    setUser(defaultUser)
  }

  return (
    <>
    <Form reactSubmit={reactSubmit} userForm={userForm} user={user}/>
    <UserList listOfUsers={listOfUsers} />
    </>
  );
}

export default App;
