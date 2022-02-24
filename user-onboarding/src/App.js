import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import React, {useState} from 'react';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  checked: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleSubmit = () => {
    //wip
  }

  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]:value});
  }

  return (
    <div className="App">
     <Form values={formValues} change={handleChange}/>
    </div>
  );
}

export default App;
