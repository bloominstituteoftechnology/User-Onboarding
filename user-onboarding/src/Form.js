import React, { useState } from "react";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const Friends = [
  {
    id: 1,
    fname: "Joseph",
    lname: "Oshiro",
    email: "joseph.oshiro@sonvrdesign.com",
    department: "Technology/ IT",
    termsConditions: true,
  },
  {
    id: 2,
    fname: "Gerald",
    lname: "Evans",
    email: "gerald.evans@sonvrdesign.com",
    department: "Frontend Development",
    termsConditions: true,
  },
  {
    id: 3,
    fname: "John",
    lname: "Watson",
    email: "john.watson@sonvrdesign.com",
    department: "Backend Development",
    termsConditions: true,
  },
  {
    id: 4,
    fname: "May",
    lname: "Jackson",
    email: "may.jackson@sonvrdesign.com",
    department: "Management",
    termsConditions: true,
  },
];

const initialFormValues = {
  fname: "",
  lname: "",
  email: "",
  department: "",
  termsConditions: false,
};

export default function Form() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [friends, setFriends] = useState(Friends);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({
    ...initialFormValues,
    termsConditions: "",
  });

  //Form Validation Feature

  let schema = yup.object().shape({
    fname: yup.string().required("Please provide a first name"),
    lname: yup.string().required("Please provide a last name"),
    email: yup.string().email("This is not a valid email address"),
    department: yup.string().required("Please provide a valid home department"),
    termsConditions: yup.boolean().required("Please ensure materials have been collected first"),
  });

  console.log(schema);

  //validate whether form matches schema
  const validateChange = (e) => {
    e.persist();
    //reach allows to check a specific value of schema
    yup
      .reach(schema, e.target.fname)
      .validate(e.target.value)
      .then((valid) =>
        setErrors({
          ...errors,
          [e.target.fname]: "",
        })
      )
      .catch((error) =>
        setErrors({ ...errors, [e.target.fname]: error.errors[0] })
      );
  };
  //change handler
  const change = (e) => {
    const { name, value } = e.target; 
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
   validateChange(e);
   console.log(e)
  };

  const handleDelete = "";

  const handleUpdate = (friendId) => {
    const friend = friends.find((f) => f.id === friendId);

    if (friend) {
      setIsEditMode(true);
      setFormValues(friend);
      setEditingId(friendId);
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
    const newFriend = {
      // needs identical structure to the other friends
      id: uuidv4(),
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      department: formValues.department,
      termsConditions: formValues.termsConditions,
    };

    // use your setFriends helper function
    setFriends(friends.concat(newFriend));
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
        />
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
        />
        <br />

        <button type="submit">
          {isEditMode ? "Update" : "Submit New Employee"}
        </button>
      </form>
      <div style={{ marginTop: "3rem", marginBottom: "2rem" }}>
        <h3 style={{ color: "white" }}>
          New team members to attend orientation on next scheduled date{" "}
          {month + 1}/{date + 3}/{year}
        </h3>
      </div>
      {friends.map((friend, idx) => (
        <div className="player-trans" key={idx} style={{ border: "2px" }}>
          <h3 style={{ marginBottom: "3rem", marginTop: "2rem" }}>
            {friend.fname} {friend.lname}
          </h3>
          <p>
            <em>Assigned Email: </em>
            {friend.email}
          </p>
          <p>
            <em>Home Department: </em>
            {friend.department}
          </p>
          <p>
            <em>Terms and Conditions Agreed To: </em>
            {friend.termsConditions ? "Yes" : "No"}
          </p>
          <br />
          <br />
          <button onClick={() => handleUpdate(friend.id)}>Edit Employee</button>
          <button onClick={() => handleDelete(friend.id)}>Delete Employee</button>
        </div>
      ))}
    </div>
  );
}
