import Form from './Form';
import React, {   useState  } from 'react';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleSubmit = () => {
    //WIP
  }
  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }


  return (
    <div className="App">
      <Form values={formValues} change={handleChange}/>
    </div>
  );
}

export default App;
