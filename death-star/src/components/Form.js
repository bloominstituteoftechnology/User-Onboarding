import axios from "axios";
import * as yup from "yup";
import React, { useState, useEffect } from "react";

let schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  Password: yup.string().required("Password is required"),
  Terms: yup.boolean(),
});

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    Password: "",
    Terms: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    Password: "",
    Terms: false,
  });
  const [disabled, setDisabled] = useState(true);

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.error }));
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse });
  };

  const submit = (event) => {
    event.preventDefault();
    const newUser = {
      name: form.name.trim(),
      email: form.email,
      Password: form.Password,
      Terms: form.Terms,
    };
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setForm({ user: "", email: "", Password: "", Terms: false });
      })
      .catch((err) => {
        debugger;
      });
  };

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  return (
    <div className="Form">
      <form onSubmit={submit}>
        <label>
          Name:
          <input
            value={form.name}
            name="name"
            type="text"
            onChange={handleChange}
          />
        </label>
        <div style={{ color: "red" }}>
          <div>{errors.name}</div>
        </div>
        Email:
        <label>
          <input name="email" type="text" onChange={handleChange} />
        </label>
        <div style={{ color: "red" }}>
          <div>{errors.email}</div>
        </div>
        Password:
        <label>
          <input name="Password" type="text" onChange={handleChange} />
        </label>
        <div style={{ color: "red" }}>
          <div>{errors.Password}</div>
        </div>
        Terms:
        <label>
          <input
            name="Terms of Service"
            type="checkbox"
            checked={form.Terms}
            onChange={handleChange}
          />
        </label>
        <div style={{ color: "red" }}>
          <div>{errors.Terms}</div>
        </div>
        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
}
