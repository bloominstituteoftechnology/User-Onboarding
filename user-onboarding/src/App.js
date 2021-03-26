import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Onboarding from './Form';
import schema from './validation/formSchema';
import * as yup from 'yup';


const initialFormValues = {
  ///// TEXT INPUTS /////
  name: "",
  email: "",
  ///// DROPDOWN /////
  password: "",
  ///// CHECKBOX /////
  terms:false,
};
const initialFormErrors = {
  name:'',
  email:'',
  password:''
}
const initialDisabled = true;
const initialUsers = [];

export default function App(){
  const [member, setMember] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const change = evt => {
    const {name, value} = evt.target;
    setFormValues({...formValues, [name]: value})
  };

  const submit = evt => {
      evt.preventDefault();
      const newPerson = {
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          password: formValues.password.trim()
      }
      setMember(member.concat(newPerson));
      setFormValues(initialFormValues);
  };

  const getOnboard = () => {
    axios
      .get('https://reqres.in/api/users')
      .then((res) => {
        setMember(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const postNewOnboard = (newOnboard) => {
    axios
      .post('https://reqres.in/api/users',newOnboard)
      .then((res) => {
        setMember([res.data, ...member]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });


  };

  const inputChange = (name,value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors, 
        [name]: '',
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
    setFormValues({
      ...formValues,
      [name]: value,
    });

  }
  
  const formSubmit = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    postNewOnboard(newMember);
  }

  useEffect(() => {
    getOnboard();
  }, []);

  useEffect(() => {
    schema.isValid(formValues)
    .then((valid) => {
      setDisabled(!valid);
    })
  }, [formValues]);


  return(
    <div className='container'>
      <h1>Create New Account</h1><br></br>

        <div>
          <h2>Login</h2>
          <form >
            <label>
              Name
              <input 
              name='name' 
              type='text' 
              value={formValues.name} 
              onChange={change}
              >
              </input>
            </label>
            <label>
              Email
              <input
              name='email'
              type='text'
              value={formValues.email}
              onChange={change}
              >
              </input>
            </label>
            <label>
              Password
              <input
              name='password'
              type='text'
              value={formValues.password}
              onChange={change}
              >
              </input>
            </label>
            <button>Submit</button>
          </form>
        </div><br></br>
      <Onboarding
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
    </div>
  )
}







