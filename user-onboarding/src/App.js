import React, { useState, useEffect } from "react";
import Form from "./Form";
import User from "./UserCard";
import formSchema from "./formSchema";
import axios from "axios";
import * as yup from "yup";
import "./App.css";
import "./Form.css";
import logo from "./Logo/Logo.png";

const initialUser = [];
const initialFormData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  tos: false,
};
const initialFormError = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  tos: false,
};
const initialDisabled = true;

function App() {
  const [user, setUser] = useState(initialUser);
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);
  const [disable, setDisable] = useState(initialDisabled);

  const getUser = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUser(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  //posts new user to the database
  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUser(user.concat(res.data));
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setFormData(initialFormData);
      });
  };
  // new User on submit
  const submit = () => {
    const newUser = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };
    postNewUser(newUser);
  };

  const dataInput = (name, data) => {
    yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(data)
      // if the validation is successful, we can clear the error message
      .then((valid) => {
        setFormError({
          ...formError,
          [name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
      .catch((err) => {
        setFormError({
          ...formError,
          [name]: err.errors[0],
        });
      });

    setFormData({
      ...formData,
      [name]: data,
    });
  };

  const dataCheckBox = (name, ischecked) => {
    setFormData({
      ...formData,
      [name]: ischecked,
    });
  };

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => {
      setDisable(!valid);
    });
  }, [formData]);

  const deleteUser = (id) => {
    axios
      .delete(`https://reqres.in/api/users${id}`)
      .then((res) => {
        // eslint-disable-line
        setUser(user.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(resetForm);
  };
  const resetForm = () => setFormData(initialFormData);

  const editUser = (id) => {
    const users = user.find((user) => user.id === id);
    setFormData({ ...users });
  };

  return (
    <div className="App">
      <Form
        data={formData}
        submit={submit}
        dataCheckBox={dataCheckBox}
        dataInput={dataInput}
        errors={formError}
        disable={disable}
        resetForm={resetForm}
      />
      <div className="userCardContainer">
        {user.map((eachUser) => {
          return (
            <User
              key={eachUser.id}
              details={eachUser}
              editUser={editUser}
              deleteUser={deleteUser}
            />
          );
        })}
      </div>
      <footer>
        <img src={logo} />
      </footer>
    </div>
  );
}

export default App;
