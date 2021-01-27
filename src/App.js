import Form from './component/Form.js';
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import schema from './validation/schema';
import './App.css';
import User from './component/User.js'

const initialFormValues = {
  name:'',
  email:'',
  password:'',
  terms: false,
}
const initialFormErrors = {
  name:'',
  email:'',
  password:'',
}

const initialUser = [];
const initialDisable = true;

function App() {
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisable);

//helpers
const getUser = () => {
  //GET
  axios
  .get(`https://reqres.in/api/users`)
  .then((res) => {
    setUser(res.data);
  })
  .catch((err) => {
    console.log(err)
  })
  
};
const postNewUser = (newUser) => {
  //POST
  axios
  .post(`https://reqres.in/api/users`, newUser)
  .then((res) => {
    setUser([res.data, ...user])
    setFormValues(initialFormValues);
  })
  .catch((err) => {
    console.log(err);
  });
};
const inputChange = (name, value) => {
  //YUP individual validation
  yup
  .reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: '',
    })
  })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });

  setFormValues({
    ...formValues,
    [name]: value,
  });
};


const formSubmit = () => {
  //post new user using post new user function
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: []
  }
  postNewUser(newUser);
};

useEffect(()=> {
  getUser();
}, []);

useEffect(()=> {
//validating all form values
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues])

  return (
    <div className="App">

     <header>
       <h1>New User</h1>
     </header>

     <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
     />
     {/* {user.map((user) => {
       return <User key={user.id} details={user} />;
     })} */}
    </div>
  );
}

export default App;
