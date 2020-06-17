import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import User from "./Users";
import * as Yup from "yup";
import formSchema from "./formSchema";
import axios from "axios";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

const initialUserList = [
  {
    name: "Alex Kemper",
    email: "alex.j.kemper@gmail.com",
    password: "password",
    terms: true,
  },
];
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [userList, setUsers] = useState(initialUserList);
  const [formErrors, setFormErrors] = useState("");

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    Yup.reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
      .catch((err) => {
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

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    };

    setUsers([...userList, newUser]);

    postNewUser(newUser);
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Post error:", err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  return (
    <div className="App">
      <div>
        <Form
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          errors={formErrors}
        />
      </div>

      <div>
        {userList.map((user) => {
          return <User key={user.id} details={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
