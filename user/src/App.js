import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./componet/Form";
//import Data from "./componet/Data"



function App() {
  // const [userList,setUserList] = useState([])
  // const addnewUser = user => {
  //   const newMember = {
  //     id: Date.now(),
  //     name: user.name,
  //     email: user.email,
  //     password: user.password
  //   };
  //   setUserList([...userList, newMember]);
  // };
  
  
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
