import "./App.css";
import Form from "./Form";
import { useState, useEffect } from "react";
import React from "react";
import User from "./User";
import Axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("https://reqres.in/api/users")
      .then((res) => {
        const data = res.data.data;
        setUsers(
          data.map((person) => {
            return {
              name: person.first_name,
              email: person.email,
              pic: person.avatar,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addUser = (user) => {
    Axios.post("https://reqres.in/api/users", user).then((res) => {
      console.log(res);
    });
    setUsers([
      ...users,
      {
        name: user.name.trim(),
        email: user.email.trim(),
        password: user.password.trim(),
        favDog: user.favDog.trim(),
        tos: false,
      },
    ]);
  };

  return (
    <div className="App">
      <header>
        {" "}
        <p>I am a header</p>{" "}
      </header>
      <Form addUser={addUser} />
      {users.map((user, idx) => {
        return <User user={user} key={idx} />;
      })}
    </div>
  );
}

export default App;
