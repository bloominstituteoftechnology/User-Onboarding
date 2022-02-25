import './App.css';
import React, {useState} from 'react'
import Form from './form';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleSubmit = () => {
    
  }

  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value});
  }
  return (
    <div className="App">
      <Form values={formValues} change={handleChange}/>
    </div>
  );
}
 
export default App;
