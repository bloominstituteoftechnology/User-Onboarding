import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'



const initialFormErrors = {
  Name: '',
  Email: '',
  Password: '',
  'Terms Of Service': true
};

function App() {  
  const [people, setPeople] = useState([])

  return (
    <div className="App">
      <Form people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
