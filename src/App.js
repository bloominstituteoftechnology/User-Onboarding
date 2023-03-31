import "./App.css";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "./Schema/schema";
import axios from "axios";
const emptyFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};
const emptyErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

function App() {
  const [formValues, setFormValues] = useState(emptyFormValues);
  const [errors, setErrors] = useState(emptyErrors);

  const [newUser, setNewUser] = useState([]);

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (evt) => {
    axios
      .post("https://reqres.in/api/users", formValues)
      .then(
        (res) => setNewUser([res.data, ...newUser]),
        setFormValues(emptyFormValues)
      )
      .catch((err) => console.log(err));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {});
  }, [formValues]);
  return (
    <div className="App">
      <Form
        values={formValues}
        change={handleChange}
        errors={errors}
        submit={handleSubmit}
      />
      <div className="userWrapper">
        {newUser.map((user, idx) => {
          return (
            <div key={idx} className="users">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
