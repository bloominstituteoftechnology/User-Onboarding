import React, { useState } from 'react'
import axios from 'axios'

import Form from './components/Form'

const BASE_URL = `https://reqres.in/api/users`

function App() {
  const [users, setUsers] = useState([])

  const onSubmit = (newUserData) => {
    axios.post(BASE_URL)
      .then(response => {
        const newUser = {
          ...newUserData,
          ...response.data
        }
        setUsers([...users, newUser ])
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <pre>{JSON.stringify(users)}</pre>
      <Form onSubmit={onSubmit} />
    </>
  )
}

export default App
