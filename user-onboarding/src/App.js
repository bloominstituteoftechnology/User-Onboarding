import './App.css';
import React,{ useState } from 'react';
import Form from './components/Form';
import User from './components/User';

const initialValues = {
  first_name: "",
  last_name:"",
  email:"",
  password:"",
  terms_of_service:false
}
const initialDisabled = true;
function App() {
  const [formValues,setFormValues] = useState(initialValues);
  const [user, setUser] = useState([])
  const [disabled,setDisabled] = useState(initialDisabled)

  const inputSubmit = () => {
    const newUser = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email:formValues.email,
      password:formValues.password,
      terms_of_service: formValues.terms_of_service
    }
   console.log(newUser)
  }
  const inputChange = (name,value) => {
    setFormValues({...formValues,[name]:value})
  }
  return (
    <div className="App">
      <Form 
        values = {formValues}
        submit={inputSubmit} 
        change = {inputChange}
        disabled = {disabled}
      />
      {
        user.map(value => <User details={value}/>)
      }
    </div>
  );
}

export default App;
