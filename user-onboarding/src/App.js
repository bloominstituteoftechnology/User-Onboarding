import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FormByFormik from './Component/Form';
import axios from "axios";

const initialUser = {
  name: '',
  email: '',
  password: '',
};

const usersApi = 'https://reqres.in/api/users_'

function App() {
  const [user, setUser] = useState(initialUser);
  const [userList, setUserList] = useState([]);

  const addUser = (formValues, actions) => {
    const userToPost = {
      name: formValues.name,
      age: formValues.age,
      password: formValues.password,
    };
    setUser(userToPost);
    console.log("button was clicked")
    axios.post(usersApi, userToPost)
      .then(res => {
        // res.data contains the newly created friend
        const newUser = res.data;
        setUserList(userList.concat(newUser));
        actions.resetForm();
      })
      .catch(err => {
        return err.message;
      });
  }
  return (
    <div className="App">
      <FormByFormik initialUser={initialUser} onSubmit={addUser}/>
    </div>
  );
}

export default App;
