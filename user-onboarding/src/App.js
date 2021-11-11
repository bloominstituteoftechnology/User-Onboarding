import Form from './Form';
import React, {   useState  } from 'react';
import schema from './formSchema';
import * as yup from 'yup';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: false
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleSubmit = () => {
    //WIP
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(error => setFormErrors({ ...formErrors, [name]: error.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }


  return (
    <div className="App">
      <Form values={formValues} change={handleChange} errors={formErrors}/>
    </div>
  );
}

export default App;
