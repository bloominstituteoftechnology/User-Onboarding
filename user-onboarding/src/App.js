import "./App.css";
import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import Form from "./Form";
import axios from "axios";
import DisplayUsers from "./DisplayUsers";

// I am not sure if anybody is even going to read this, but I decided to use Formik for the form creation. This is a library that I found while reaserching and found that it makes the entire signup and validation process super straight foreward. All the lines of my form are generated dynamically from the Form.js file. All I have to do is pass in a name as props and it creates my entire form for me. It also handles the yup validataion without having to use state at all. The only reason I have to use state was because the project wanted me to display information on the screen when a user signs up. I can probably even do this within Formik it's self but I am not sure how to. Formik seems to be really popular. I might suggest teaching to this in the future. Especially since the code Canvas for this assignment is incorrect and needs to be updated anyways.

const formSchema = yup.object().shape({
  name: yup.string().required("You must enter your name"),
  email: yup
    .string()
    .email("Your email address must be valid")
    .required("You must provide your email address"),
  password: yup
    .string()
    .min(6, "Your password must be 6 or more characters")
    .required("You can not create an account without a valid password"),
  terms: yup.boolean().oneOf([true], "You must accept the terms"),
});

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Create Your Account</h1>
        <Formik
          initialValues={{
            users: [],
          }}
          validationSchema={formSchema}
          onSubmit={(data) => {
            axios
              .post("https://reqres.in/api/users", data)
              .then((res) =>
                console.log(
                  `Submitted Successfully. Check network tab ${res.data}`
                )
              )
              .catch((err) =>
                console.log(
                  `Not submitted successfully. Check network tab to debug ${err}`
                )
              );
            setUsers([...users, data]);
          }}
        >
          {({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Form
                  className="name"
                  name="name"
                  placeholder="name"
                  label="Name "
                />
                <Form
                  className="email"
                  name="email"
                  placeholder="email"
                  label="Email "
                />
                <Form
                  className="password"
                  name="password"
                  placeholder="password"
                  label="Password "
                />
                <Form
                  name="terms"
                  placeholder="terms"
                  type="checkbox"
                  label="Agree to the terms?"
                />
                <button type="submit">Submit</button>
              </form>
            );
          }}
        </Formik>
      </div>
      <div className="BodyWrapper">
        {users.map((user) => (
          <DisplayUsers users={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
