import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Form from './Components/Form'
import UserList from './Components/UserList';


function App() {
  const [Users, setUsers] = useState([])
  return (
    <div className="App">
      <Form setUsers= {setUsers} Users = {Users}/>
      <UserList Users = {Users}/>
    </div>
  );
}

export default App;
