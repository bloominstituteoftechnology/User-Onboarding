import './App.css';
import React,{ useState,useEffect } from 'react';
import Form from './components/Form';
import User from './components/User';
import formSchema from './validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';


const initialValues = {
  first_name: "",
  last_name:"",
  email:"",
  password:"",
  terms_of_service:false
}
const initialDisabled = true;
const initialUsers = []
function App() {
  const [formValues,setFormValues] = useState(initialValues);
  const [users, setUsers] = useState(initialUsers)
  const [disabled,setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState({first_name:'',last_name:'',email:''})

  const postNewUser = (user) => {
    axios.post('https://reqres.in/api/users',user)
      .then(res => {
        setUsers([res.data,...users])

      })
      .catch(err => console.log(err))
      .finally(setFormValues(initialValues))
  }

  const inputSubmit = () => {
    const newUser = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email:formValues.email,
      password:formValues.password,
      terms_of_service: formValues.terms_of_service
    }
    
   postNewUser(newUser)
  }
  const validate = (name,value) => {
    yup.reach(formSchema,name).validate(value)
      .then(() => setFormErrors({...formErrors,[name]:''}))
      .catch(err => {
        setFormErrors({...formErrors,[name]:err.errors[0]})
      })
  }
  const inputChange = (name,value) => {
    validate(name,value)
    setFormValues({...formValues,[name]:value});
    
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  },[formValues])
  

  return (
    <div className="App">
      <h1>Please enter your information:</h1>
      <Form 
        values = {formValues}
        submit={inputSubmit} 
        change = {inputChange}
        disabled = {disabled}
        errors={formErrors}
      />
      <h2>Users Avaliable:</h2>
      {
        users.map(user => <User key={user.id} details={user}/>)
        // console.log(users)
      }
    </div>
  );
}

export default App;
