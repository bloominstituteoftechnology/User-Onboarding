import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Components/Form'
import formSchema from './Validation/formSchema'
import Friends from './Components/Friends'

const initialFormValues = {
  name:'',
  email:'',
  password:'',
  terms: false,
}
const initialFormErrors ={
  name:'',
  email:'',
  password:'',
}
const initialMembers =[]
const initialDisabled = false


function App() {
  
  const [formValues,setFormValues] = useState(initialFormValues);
  const [members,setMembers] = useState(initialMembers);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled,setDisabled] = useState(initialDisabled)
  
  
  
  const change = e => {

    const {name,value,checked,type} = e.target;
    const valueToUse = type ==='checkbox' ? checked : value;
    inputChange(name,valueToUse)
  };

  const inputChange =(name,value) =>{
    yup.reach(formSchema, name)
    .validate(value)
    .then(()=>{
      setFormErrors({...formErrors,[name]:''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
    setFormValues({...formValues,[name]:value})
  }

  // const getMembers = () =>{
  //   axios
  //   .get('https://reqres.in/api/users')
  //   .then(res => {
  //     setMembers(res.data.data)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // };
  // console.log(members)

  // useEffect(() => {
  //   getMembers()
  // },[]);



  const postMember = newMember => {

    axios
    .post('https://reqres.in/api/users', newMember)
    .then(res => {
      setMembers([res.data, ...members])
    })
    .catch(err => {
      console.log(err)
    })
    setFormValues(initialFormValues)
  }

  const formSubmit =() =>{
    const newMember ={
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password,
        terms: formValues.terms,
    }
    postMember(newMember)
    // setMembers(members.concat(newMember))
  }
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <h1>This is a Form</h1>
      <Form value={formValues} change={change} submit={formSubmit} disabled={disabled} errors={formErrors}/>
      <Friends members={members}/>
    </div>
  );
}

export default App;
