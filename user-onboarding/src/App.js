import Form from './Components/Form'
import './App.css';
import React,{useState,useEffect} from 'react'
import * as yup from 'yup'
import axios from 'axios'
import schema from './Validation/schema';

function App() {

  const initialFormValues = {
    name:'',
    email:'',
    password:'',
    tos:false
  }

  const initialErrors = {
    name:'',
    email:'',
    password:'',
    tos:''
  }

  const [value,setValues] = useState(initialFormValues);
  const [errors,setErrors]  = useState(initialErrors)
  const [users,setUsers] = useState([]);
  
  const change = (name,values)=>{
    validate(name,values);
    setValues({...value,[name]:values});
  }
  
  const submit =()=>{
    axios.post('https://reqres.in/api/users',value)
    .then(res=>{
      setUsers([res.data,...users])
      console.log(users)
      
    }).catch(err=>console.error(err))
    
  }

  const validate = (name,value)=>{
    yup.reach(schema,name)
    .validate(value)
    .then(res=> setErrors({...errors,[name]:''}))
    .catch(err=>setErrors({...errors,[name]:err.errors[0]}))
  }





  return (
    <div className="App">
    <Form values = {value} change={change} submit={submit} errors ={errors}/>

    {users.map(users=>{
      return(
      <div>
        <p>{users.name}</p>
        <p>{users.email}</p>
      </div>
      )
    })}
    </div>
   
  );
}

export default App;
