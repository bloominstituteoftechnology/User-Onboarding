import React, { useState, useEffect } from 'react';
import User from './User';
import UserForm from './UserForm';
import schema from './validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import { validate } from 'uuid';

const initialFormValues = {
 
  first_name: '',
  last_name: '',
  email: '',
   terms: false
};

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  terms: false
};

const initialUsers = [];
const initialDisabled = true;

function App() {

  const [users, setUsers] = useState(initialUsers);          
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors); 
  const [disabled, setDisabled] = useState(initialDisabled);       

  const getUsers = () =>
  {
      

      axios.get("https://reqres.in/api/users")
          .then(response =>
          {
              console.log("AXIOS GET:", response.data.data);
              setUsers(response.data.data);
          })
          .catch(err =>
              console.error(err));
  };

  const postNewUser = newUser =>
  {
    axios.post("https://reqres.in/api/users", newUser)
    .then(response => {
        setUsers([response.data, ...users]);
    })
    .catch(err => console.error(err));

setFormValues(initialFormValues);
};

const validate = (name, value) =>
    {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
    };
    const inputChange = (name, value) =>
    {
        validate(name, value);
        setFormValues({ ...formValues,[name]: value });
    };

    const formSubmit = () =>
    {
        const newUser = {
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            email: formValues.email.trim(),
            terms: formValues.terms
        };

        
        postNewUser(newUser);
    };

        useEffect(() =>
    {
        getUsers();
    }, []);

    useEffect(() =>
    {        
        schema.isValid(formValues).then(valid => setDisabled(!valid));
    }, [formValues]);

    return (
        <div className='container'>
            <header className="head">
                <h1 className="user_onboard">Users Onboarding</h1>
            </header>

            <UserForm
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
            />

            {
                users.map(user =>{
                    return (<User key={user.id} details={user} />
                    );
                })
            }
        </div>
    );
} 







  

export default App;
