import React, { useState, useEffect } from 'react';
import User from './User';
import UserForm from './UserForm';
import schema from './validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
const initialFormValues = {
  ///// TEXT INPUTS /////
  first_name: '',
  last_name: '',
  email: '',
  ///// CHECKBOXES /////
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

  const [users, setUsers] = useState(initialUsers);          // array of user objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled);       // boolean

  const getUsers = () =>
  {
      // 🔥 STEP 5- IMPLEMENT! ON SUCCESS PUT USERS IN STATE

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
        // 🔥 STEP 10- RUN VALIDATION WITH YUP
        validate(name, value);
        setFormValues({
            ...formValues,
            [name]: value // NOT AN ARRAY
        });
    };

    const formSubmit = () =>
    {
        const newUser = {
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            email: formValues.email.trim(),
            terms: formValues.terms
        };

        // 🔥 STEP 8- POST NEW USER USING HELPER
        postNewUser(newUser);
    };

    //////////////// SIDE EFFECTS ////////////////
    //////////////// SIDE EFFECTS ////////////////
    //////////////// SIDE EFFECTS ////////////////
    useEffect(() =>
    {
        getUsers();
    }, []);

    useEffect(() =>
    {
        // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
        schema.isValid(formValues).then(valid => setDisabled(!valid));
    }, [formValues]);

    return (
        <div className='container'>
            <header><h1>Users Onboarding</h1></header>

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
