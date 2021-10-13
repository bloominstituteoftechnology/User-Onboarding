import React from 'react';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  
}

function App() {
  const [user, setUser ] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div className="App">
      <h1>Welcome to my App. Now give me all of your info! Muahahahaha 😈</h1>
    </div>
  );
}

export default App;
