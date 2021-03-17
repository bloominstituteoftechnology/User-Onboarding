import React, { useState } from "react";
import axios from "axios";
import user from "./User";
const initialFormValues = {
  firstName: "",
  Email: "",
  Password: "",
  serviceTerms:false,
};

export default function Form() {
  const [newUser, setNewUser] = useState();
  const [formValues, setFormValues] = useState(initialFormValues);
  // const[formErrors, setFormErrors]= useState(initialFormErrors);

  const getUser = () => {
    axios
      .get("http://regres.in/api/users")
      .then((res) => {
        setNewUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postNewUser = newUser => {
    axios
      .post("http://regres.in/api/users", newUser)
      .then((res) => {
        setNewUser([res.data, ...user]);
        console.log("Api success", res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
    setFormValues(initialFormValues);
  };
  const submit = (e) => {
    e.preventDefault();

    const toBeUpdated = {
      firstName: formValues.firstName,
      Email: formValues.Email,
      Password: formValues.Password,
    };
    setNewUser(...user, toBeUpdated);
    setFormValues(initialFormValues);
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === 'checkbox' ? checked : value
    // change(name, valueToUse)
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={onChange}
          value={formValues.firstName}
          placeholder="First Name"
          id="firstNameInput"
          name="firstName"
          type="text"
        />
        <input
          onChange={onChange}
          value={formValues.Email}
          placeholder="Email"
          id="emailInput"
          name="Email"
          type="Email"
        />
        <input
          onChange={onChange}
          value={formValues.Password}
          placeholder="Password"
          id="passwordInput"
          name="Password"
          type="text"
        />
        <label> service Terms
        <input onChange={onChange} 
        type="checkbox"
         name="serviceTerms"
         checked={formValues.serviceTerms} />
         </label>

        <button type="submit">submit</button>
      </form>
      {user &&
        user.map((users, idx) => (
          <div style={{ border: ".15rem solid black" }} key={idx}>
            <h3>{users.firstName}</h3>
            <p>{users.Email}</p>
            <p>{users.Password}</p>
          </div>
        ))}
    </div>
  );
}
