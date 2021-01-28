import React, {useState, useEffect} from 'react'
import Form from './Form'
import * as yup from 'yup'
import axios from 'axios'
import schema from './validation/formSchema'

const initFormValues = {
  name: '',
  email: '', 
  password: '',
  terms: false,
}

const initFormErrors = {
  name: '',
  email: '', 
  password: '',
  terms: false,
}
const initialDisabled= true;

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues]= useState(initFormValues);
  const [formErrors, setFormErrors]= useState(initFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


const postNewMember = (newMember) => {
  axios.post("https://reqres.in/api/users", newMember)
  .then((response)=>{
    setMembers([response.data, ...members]);
    setFormValues(initFormValues)
  })
}

  const inputChange = (name, value)=>{

  yup
  .reach(schema, name)
  .validate(value)
  .then(()=>{
    setFormErrors({...formErrors, [name]: '' })
  })
  .catch((err)=>{
    setFormErrors({...formErrors, [name]: err.errors[0]})
  })


setFormValues({...formValues, [name]:value})
};



const submitForm = () =>{
  const newMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: ['terms'].filter(term=>formValues[term])
  }
  // setMembers({...members, newMember});
  // setFormValues(initFormValues)
  postNewMember(newMember);
}

useEffect(()=>{
  schema.isValid(formValues).then(valid =>{
    setDisabled(!valid)
  })

}, [formValues])

  return (
    <div >
      <Form values={formValues} change={inputChange} submit={submitForm} disabled = {disabled}/>
  
    </div>
  );
}

export default App;
