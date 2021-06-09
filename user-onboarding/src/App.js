/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";
import User from "./components/User";

function App() {
  const initialUsers = [];
  const [users, setUsers] = useState(initialUsers);
  const url = "https://reqres.in/api/users";

  const submit = (user) => {
    console.group("%cForm Submitted", "color: green");
    axios
      .post(url, user)
      .then((res) => {
        console.log(`%cResponse status: ${res.status}`, "color: #007AAF");
        setUsers([...users, res.data]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <Form submit={submit} />
      {users.map((user, index) => (
        <User key={index} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default App;
