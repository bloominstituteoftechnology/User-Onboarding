import logo from './logo.svg';
import React, {useState, useEffect} from "react"
import './App.css';
import Forms from "./Forms";
import axios from "axios";
import * as yup from "yup";
import schema from "./formSchema"



const initialFormValues = {
  name:"",
  email:"",
  password:"",
  state:"",
  pizza:false,
  tacos:false,
  burgers:false
}

const initialFormErrors = {
  name:"",
  email:"",
  password:"",
  state:"",
}

const initialMembers = []
const initialDisable = true


function App() {


    const [members, setMembers] = useState(initialMembers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disable, setDisable] = useState(initialDisable)

    const getMember = () => {
      axios
        .get(`https://reqres.in/api/users`)
        .then(res => {
          console.log(res)
          setMembers(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }

    const postNewMember = newMember => {
      axios
        .post(`https://reqres.in/api/users`)
        .then(res => {
          setMembers(...members,res.data)
          setFormValues(initialFormValues)
        })
        .catch(err => {
          console.log(err)
        })
    }


    const inputChange = (name, value) => {
      yup
        .reach(schema, name)
        .validate(value)
        .then(() =>{
          setFormErrors({...formErrors,
          [name]: ""})
        })
        .catch( err => {
          setFormErrors({
            ...formErrors,
            [name]: err.error[0]
          })
        })
      setFormValues({
        ...formValues,
        [name]:value
      })  
    }


    const formSubmit = () => {
      const newMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        state: formValues.state,
        foods:["pizza", "burgers","tacos"].filter(food => formValues(food)),
        password: formValues.password,
        terms:formValues.tos
      }
      postNewMember(newMember)
    }

    useEffect(() => {
      getMember()
    },[])

    useEffect(() => {
      schema.isValid(formValues).then(valid =>{
        setDisable(!valid)
      })
    },[formValues])


  return (
    <div className="App">
      <header className="App-header">
        <Forms values={formValues} change={inputChange} submit={formSubmit} disabled={disable} errors={formErrors}/>
      </header>
    </div>
  );
}

export default App;
