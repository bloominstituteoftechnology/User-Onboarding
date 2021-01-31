import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import schema from "./formSchema.js";
import Friends from "./Friends";
import initialFormValues from "./initialFormValues";
import initialFormErrors from "./initialFormErrors";
import axios from "axios";
import "./App.css";

export default function Form() {
  const [disabled, setDisabled] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [friends, setFriends] = useState(Friends);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({
    initialFormErrors,
  });

  const postnewHire = (newHire) => {
    axios
      .post("http://reqres.in/api/users", newHire)
      .then((res) => {
        setFriends([res.data, ...friends]);
        console.table("API SUCCESS POST", res.data);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log("AXIOS FAIL ERROR: ", err);
      });
  };

  const deleteQuote = (friend, idx) => {
    console.log("this employee is no longer scheduled for orientation")
  }

  //Form Validation Feature
  //validate whether form matches schema
  const validateChange = (e) => {
    //allows react to keep the event object to play nicely with the async
    e.persist();
    //reach allows to check a specific value of schema
    yup
      .reach(schema, e.target.name)

      .validate(
        e.target.name === "termsConditions" ? e.target.checked : e.target.value
      )
      .then((valid) => {
        //logs validation truthiness
        console.log(valid);
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        setErrors({ ...errors, [e.target.name]: error.errors[0] });
        console.log(error);
      });
  };

  //change handler
  const change = (e) => {
    const { name, value } = e.target;
    validateChange(e);
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  //submit disable feature
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  //form error validation tester
  // useEffect (() => {
  //   console.log("form errors have changed", errors)
  // })

  // to update new hires
  const handleUpdate = (eId) => {
    const employee = friends.find((f) => f.id === eId);

    if (employee) {
      setIsEditMode(true);
      setFormValues(employee);
      setEditingId(eId);
    }
  };

  const handleCheckboxChange = (e) => {
    const { checked, name } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: checked }));
    validateChange(e);
  };

  const submit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      const friend = friends.find((f) => f.id === editingId);

      if (friend) {
        const toBeUpdated = { ...friend };
        toBeUpdated.fname = formValues.fname || toBeUpdated.fname;
        toBeUpdated.lname = formValues.lname || toBeUpdated.lname;
        toBeUpdated.email = formValues.email || toBeUpdated.email;
        toBeUpdated.department =
          formValues.department || toBeUpdated.department;
        toBeUpdated.termsConditions = formValues.termsConditions;
        const filteredFriends = friends.filter((f) => f.id !== toBeUpdated.id);

        setFriends([...filteredFriends, toBeUpdated]);
        // reset the formsValue state
        setFormValues(initialFormValues);
        setEditingId(null);
        setIsEditMode(false);
      }
      return;
    }

    // const lastUsersId = friends[friends.length - 1].id;
    const newHire = {
      // needs identical structure to the other friends
      id: uuidv4(),
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      department: formValues.department,
      termsConditions: formValues.termsConditions,
    };

    // use your setFriends helper function
    // setFriends(friends.concat(newFriend));
    postnewHire(newHire);
    // reset the formsValue state
    setFormValues(initialFormValues);
  };

  // New Orientation Date Feature
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return (
    <div className="container">
      <h2 style={{ color: "white", marginTop: "2rem" }}>
        New Hire Orientation Signup
      </h2>
      <form onSubmit={submit} className="form">
        <label htmlFor="fnameInput">First Name (required): </label>
        <input
          onChange={change}
          value={formValues.fname}
          maxLength="15"
          placeholder="First Name"
          id="fnameinput"
          name="fname"
          type="text"
          errors={errors}
        />
        <p>{errors["name"]}</p>
        <br />
        <label htmlFor="lnameInput">Last Name (required): </label>
        <input
          onChange={change}
          value={formValues.lname}
          maxLength="15"
          placeholder="Last Name"
          id="lnameinput"
          name="lname"
          type="text"
          errors={errors}
        />
        <br />
        <div
          className="d-flex justify-content-center align-content-center"
          style={{
            marginTop: "2rem",
            paddingTop: "3em",
            paddingBottom: "1rem",
          }}
        >
          <label htmlFor="emailInput">Company Email Address: </label>
          <input
            onChange={change}
            value={formValues.email}
            maxLength="45"
            placeholder="email"
            id="emailinput"
            name="email"
            type="text"
          />
        </div>
        <br />

        <label htmlFor="departmentSelect">Home Department (required): </label>
        <select
          id="departmentSelect"
          name="department"
          value={formValues.department}
          style={{ margin: "2rem" }}
          onChange={change}
          errors={errors}
        >
          <option value="">--Choose One --</option>
          <option value="">--</option>
          <option value="Technology/ IT">Technology/ IT</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Beta Testing/ Troubleshooting">
            Beta Testing/ Troubleshooting
          </option>
          <option value="UI/ UX Team">UI/ UX Team</option>
          <option value="Management">Management</option>
          <option value="Accounting and Executive">
            Accounting and Executive
          </option>
        </select>
        <br />
        <label htmlFor="termsInput">
          Click if new hire materials collected{" "}
          <a href="https://assets.adm.com/Our-Company/Code-of-Conduct/CodeOfConduct_en-US.pdf">
            (new hire materials)
          </a>{" "}
        </label>
        <input
          type="checkbox"
          id="termsInput"
          name="termsConditions"
          checked={formValues.termsConditions}
          onChange={handleCheckboxChange}
          errors={errors}
        />
        <br />
        
        

        <button type="submit" disabled={disabled} id="btn-id">
          {isEditMode ? "Update" : "Submit New Employee"}
        </button>
        <div>
          <em>{initialFormErrors.fname}</em>
        </div>
        <div>
          <em>{initialFormErrors.lname}</em>
        </div>
        <div>
          <em>{initialFormErrors.department}</em>
        </div>
        <div>
          <em>{initialFormErrors.termsConditions}</em>
        </div>
      </form>

      <div style={{ marginTop: "3rem", marginBottom: "2rem" }}>
        <h3 style={{ color: "white" }}>
          New team members to attend orientation on next scheduled date{" "}
          {month + 1}/{date + 3}/{year}
        </h3>
      </div>
      {friends.map((friend, idx) => (
        <div className="player-trans container" key={idx} style={{ border: "2px" }}>
          <h3 style={{ marginBottom: "3rem", marginTop: "2rem" }}>
            {friend.fname} {friend.lname}
          </h3>
          <p>
            <em>Assigned Email: </em>
            {friend.email}
          </p>
          <p>
            <em>Home Department: </em><br />
            {friend.department}
          </p>
          <p>
            <em>Terms and Conditions Agreed To: </em>
            {friend.termsConditions ? "Yes" : "No"}
          </p>
          <br />
          <br />
          <button id="edit-btn" onClick={() => handleUpdate(friend.id)}>
            Edit Employee
          </button>
          <button id={idx} onClick={() => deleteQuote(friend.id)}>Delete Employee</button>
        </div>
      ))}
    </div>
  );
}
