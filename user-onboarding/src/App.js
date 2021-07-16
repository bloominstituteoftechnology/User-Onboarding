import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import { useState } from 'react';
import Users from './components/Users';

function App() {
  const [memberCard, setMemberCard] = useState([])

  return (
    <div className="App">
      <h1>MMO Discussion Board</h1>
      <Form/>
      <Users />
    </div>
  );
}

export default App;
