import React, {useState,useEffect} from 'react'
import './App.css';
import Form from './Form'
import AddNewMember from './Add New Member'
import schema from './Validation'
import axios from 'axios'
import * as yup from 'yup'


function App() {
const initialFormValues= {
  name: "",
  email: "",
  password: "",
  termsOfService: false,
}

const initialFormErrors= {
  name: "",
  email: "",
  password: "",
  termsOfService: ""
}

const initialDisabled= true

const [formValues, setFormValues]= useState(initialFormValues)
const [members, setMembers] = useState ([])
const [errors, setErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const getMembers = () => {
  axios.get('https://reqres.in/api/users') 
    .then(res =>{
      // console.log(res)
      setMembers(res.data.data)
    })
    .catch(err => console.error(err))
}
// console.log('just checking', members)

const postNewMember = newMember => {
  axios.post('https://reqres.in/api/users', newMember)
    .then(res =>{
      setMembers([res.data.data, ...members])
      setFormValues(initialFormValues)
    }).catch(err => console.error(err))
}

const validate= (name,value) => {
  yup.reach(schema, name).validate(value)
    .then(() => setErrors({ ...errors, [name]: ""}))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
}

const change= (name, value) => {
  validate(name, value);
  // console.log(evt)
  setFormValues({ ...formValues, [name]: value
  })
}

const submit= () => {
  const newMember= {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password,
    termsOfService: !formValues.termsOfService
    
  }
  postNewMember(newMember)
}
useEffect(() =>  {
  getMembers()
}, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled( !valid))
})
// console.log('hello', formValues)
// useEffect(() => {
//   axios.get('https://reqres.in/api/users') 
//     .then(res =>{
//       setMembers('newList', res)
//     })
//     .catch(err => console.error(err))
// }, [members])
  return (
    <div className="container">
      {
       <AddNewMember
        />
     }
     {
       <Form 
       value= {formValues}
       change={change}
       submit={submit}
       errors={errors}
       disabled= {disabled}
       />
     }
      
    </div>
  )
}

export default App;
