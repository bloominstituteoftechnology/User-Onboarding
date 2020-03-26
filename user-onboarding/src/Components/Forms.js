import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  Name: yup.string().required("Name is a required field."),
  Email: yup
    .string()
    .email("Must be a valid email.")
    .required(),
  Password: yup.string().required("Please enter your password"),
  Terms: yup.boolean().oneOf([true], "Please agree to terms of use")
});

export default function Form() {
  const [button, setButton] = useState(true);

  const [newForm, setForm] = useState({
    Name: "",
    Email: "",
    Password: "",
    Terms: ""
  });

  const [error, setError] = useState({
    Name: "",
    Email: "",
    Password: "",
    Terms: ""
  });

  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(newForm).then(valid => {
      console.log(valid);
      setButton(!valid);
    });
  }, [newForm]);

  const validateChange = event => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then(valid => {
        console.log(valid);
        setError({
          ...error,
          [event.target.name]: " "
        });
      })
      .catch(err => {
        console.log(err);
        setError({
          ...error,
          [event.target.name]: err.errors[0]
        });
      });
  };

  const formSubmit = event => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", newForm)
      .then(response => {
        setPost(response.data);
        setForm({
          Name: "",
          Email: "",
          Password: "",
          Terms: ""
        });
      })
      .catch(err => console.log(err.response));
  };

  const inputChange = event => {
    event.persist();
    const newFormValue = {
      ...newForm,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    };
    validateChange(event);
    setForm(newFormValue);
  };

  const submitForm = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="Name">
        Name:
        <input
          id="Name"
          type="text"
          name="Name"
          value={newForm.name}
          onChange={inputChange}
        />
        {error.Name.length > 0 ? <p>{error.Name} </p> : null}
      </label>
      <br />
      <label htmlFor="Email">
        Email:
        <input
          id="Email"
          type="text"
          name="Email"
          value={newForm.Email}
          onChange={inputChange}
        />
        {error.Email.length > 0 ? <p>{error.Email}</p> : null}
      </label>
      <br />
      <label htmlFor="Password">
        Password:
        <input
          id="Password"
          type="password"
          name="Password"
          value={newForm.Password}
          onChange={inputChange}
        />
        {error.Password.length > 0 ? <p>{error.Password}</p> : null}
      </label>
      <br />
      <label htmlFor="Terms">
        <input
          type="checkbox"
          name="Terms"
          checked={newForm.Terms}
          onChange={inputChange}
        />
        Terms and Conditions
      </label>
      <br />
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button disabled={button}>Submit</button>
    </form>
  );
}
