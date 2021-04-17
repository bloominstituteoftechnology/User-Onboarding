/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const initialUsers = [
    {
      name: "",
      email: "",
      password: "",
      tosCheck: true,
    },
  ];
  const [users, setUsers] = useState(initialUsers);

  const submit = (user) => {
    console.groupCollapsed("submit()");
    console.log(user);
    setUsers([...users, user]);
    console.groupEnd();
  };

  return (
    <div className="App">
      <Form submit={submit} />
      {users.map((user, index) => (
        <div className="user" key={index}>
          <h2>{user.name}</h2>
          <a href="#">{user.email}</a>
        </div>
      ))}
    </div>
  );
}

export default App;
