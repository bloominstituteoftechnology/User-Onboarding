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
    console.groupCollapsed("%cForm Submitted", "color: green");
    axios
      .post(url, user)
      .then((res) => {
        console.log(`%cResponse status: ${res.status}`, "color: #007AAF");
        setUsers([...users, res.data]);
        const activeInputs = document.querySelectorAll(".active");
        // remove active classes on success
        activeInputs.forEach((input) => input.classList.remove("active"));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="row">
      <Form submit={submit} />
      {users.map((user, index) => (
        <User
          key={index}
          name={user.name}
          email={user.email}
          role={user.role}
        />
      ))}
    </div>
  );
}

export default App;
