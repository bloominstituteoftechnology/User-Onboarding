import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Form'
import schema from './formSchema'
import axios from 'axios'
import * as yup from 'yup'
import Member from './Member'


const initialForm = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: '',
}

const initialDisabled = true
const initialMember = []
export default function App() {



  const [teamMember, setTeamMember] = useState (initialMember);
  const [formValues, setFormValues] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled)

const updateForm = (inputName, inputValue) =>{
  yup
  .reach(schema, inputName)
  //we can then run validate using the value
  .validate(inputValue)
  // if the validation is successful, we can clear the error message
  .then(() => {
    setFormErrors({
      ...formErrors, [inputName]: "",
    });
  })
  // if the validation is unsuccessful, we can set the error message to the message
  // returned from yup (that we created in our schema)
  .catch(err => {
    setFormErrors({
      ...formErrors, [inputName]: err.errors[0],
    });
  });

  setFormValues({...formValues, [inputName]: inputValue,})

};

// // const getMember = () => {
// // axios.get('https://reqres.in/api/users')
// //   .then((res) =>{
// //     setTeamMember(res.data)
// //   })
// //   .catch(err => {
// //     console.log(err, "Error!")
// //   })

// }

const postMember = newMember => {
  axios.post('https://reqres.in/api/users', newMember)
    .then((res) =>{
      setTeamMember([res.data, ...teamMember])
      setFormValues(initialForm)
    })
    .catch((err) =>{
      console.log(err, "Error!")
    })

}

const submitForm = () =>{

  const newMember =  {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
  
  }
  postMember(newMember)

}

// useEffect(() => {
//   getMember()
// }, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => {
    setDisabled(!valid);
  });
}, [formValues])


console.log(teamMember.data)
  return (
    <div className="container">
       <h1>My Form</h1>
     <Form values = {formValues}
            update = {updateForm}
            submit = {submitForm}
            disabled = {disabled}
            errors = {formErrors}/>
  
          {teamMember.map((member) =>{
            return(
              <Member key={member.id} details={member}/>
  
          )})}
    </div>
    
); 
            }
          