import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import axios from 'axios'

function App() {
  const [userState, setUserstate] = useState([]);
  const [userList, setUserList] = useState([]);

  const createUserHandler = createUser => {
    setUserstate([...userState, createUser])
      axios
          .post('https://reqres.in/api/users', {createUser})
          .then(res => {
            console.log(res)
            setUserList([res.data])
          })
          .catch(err => {
              console.log('err', err)
          })
  }
  
console.log('users', userList)
  return (
    <div>
      <Form addUser={createUserHandler} />
      {console.log('user list', userList)}
      {userList.map(user => {
        return <div>
          <h1>{user.createUser.name}</h1>
          <ul>
            <li>ID: {user.id}</li>
            <li>E-mail: {user.createUser.email}</li>
            <li>Password: {user.createUser.password}</li>
            <li>Read TOS? {user.createUser.tos ? 'true' : 'false'}</li>
          </ul>
        </div>
      })}
    </div>
  );
}


export default App;
