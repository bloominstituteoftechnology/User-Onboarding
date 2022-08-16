import './App.css';
import React, {useState, useEffect} from "react";
import Form from './components/Form';
import userFormSchema from './validation/userFormSchema';
import * as yup from "yup";
import axios from 'axios';

const initialUsers = [];
const initialDisabled = true;

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: '',
}


function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const getUsers = () => {
    // 🔥 STEP 5- IMPLEMENT! ON SUCCESS PUT FRIENDS IN STATE
    //    helper to [GET] all friends from `http://buddies.com/api/friends`
    axios.get("https://reqres.in/api/users")
      .then(res => {
        setUsers(res.data);
      }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        console.log((users));
        setUsers([res.data, ...users]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(userFormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      checked: formValues.checked,
    }
    postNewUser(newUser);
  }

  useEffect(() => {
  })

  return (
    <div className="App">

      <Form 
        values={formValues}
        change={handleChange}
        submit={handleSubmit}
        errors={formErrors}
      />
      {users.map((user, index) => {
        return <div key={index}>{user.username} {user.email}</div> 
      })}
    </div>
  );
}

export default App;
