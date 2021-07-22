import React, { useState } from 'react'


import './App.css';
import Form from './Form'

function App() {
  const [users, setUsers] = useState([])

  const submit = (user) => {
    setUsers([...users, user ])
  }

  
  return (
    <div className="App">
      {users.map((user, idx) => {
        return(
          <React.Fragment key ={idx}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </React.Fragment>
        )
      })}

      <Form submit={submit}/>
    </div>
    
  );
}

export default App;
