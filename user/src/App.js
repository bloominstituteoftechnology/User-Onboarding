import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./componet/Form";
// import MemberCard from './componet/MemberCard';



function App() {
  const [member, setMember] = useState([])
  const addnewMember = memb => {
    const newMember = {
      id: Date.now(),
      name: memb.name,
      email: memb.email,
      password: memb.password
    };
    setMember([...member, newMember]);
  };
  
  
  return (
    <div className="App">
      <Form addnewMember = {addnewMember}/>
      
    </div>
  );
}

export default App;
