import './App.css';
import Form from './Form';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import User from './User';
import schema from './formSchema';
import * as yup from 'yup';

function App() {
  
  const initialFormValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        termsOfService: false
  }

  const initialFormErrors = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        termsOfService: false
  }
  const initialDisabled = true;


    //states for users and form values
    const [users, setUsers] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
  

   //get users on initial render
      const getUsers = () => {
        axios.get('https://reqres.in/api/users')
        .then(res => {
          setUsers(res.data.data)
        }).catch(err => {
          console.lerror(err)
        })
      }

    //post new user
    const postUsers = newUser => {
      axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([newUser,...users])
      }).catch(err => {
        console.lerror(err)
      }).finally(() => {
        setFormValues(initialFormValues)
      })
    }

    const validate = (name,value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]:''}))
      .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}))
    }

      //initial render
      useEffect(()=>{
        getUsers()
      }, [])

      useEffect(() => {
        // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
        schema.isValid(formValues).then(valid => setDisabled(!valid))
      }, [formValues])

      

      //updates changes in input and assigns to form values variable
      const updateForm = (name, value) => {
        validate(name,value);
        setFormValues({...formValues, [name]:value})
      }




      //on submit function, updates users list with new user
      const submitForm = () => {
          const newMember = {
            first_name: formValues.first_name,
            last_name: formValues.last_name,
            email: formValues.email,
            password: formValues.password,
            termsOfService: formValues.termsOfService
          }

          postUsers(newMember)
      }


    
    




  return (
    <div className="App">
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      disabled={disabled}
      errors={formErrors}
      />
      <hr></hr>

      <h2>Users</h2>
      <hr></hr>
      {
        users.map(user => {
            return(
                <User key={user.id} details={user}/>      
            )
          }
        )}
    </div>
  );
}

export default App;
