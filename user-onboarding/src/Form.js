import React, { useState } from "react";
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

  const change = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

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
    console.log(newFriend);

    // use your setFriends helper function
    setFriends(friends.concat(newFriend));
    // reset the formsValue state
    setFormValues(initialFormValues);
  };

  return (
    <div>
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

        <label htmlFor="lemailInput">Email: </label>
        <input
          onChange={change}
          value={formValues.email}
          maxLength="45"
          placeholder="email"
          id="lemailinput"
          name="email"
          type="text"
        />
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
          Click to agree to{" "}
          <a href="http://www.google.com">Terms and Conditions</a>{" "}
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
      {friends.map((friend, idx) => (
        <div className="player-trans" key={idx} style={{ border: "2px" }}>
          <h3>
            {friend.fname} {friend.lname}
          </h3>
          <p>
            <em>email: </em>
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
          <button onClick={() => handleUpdate(friend.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
