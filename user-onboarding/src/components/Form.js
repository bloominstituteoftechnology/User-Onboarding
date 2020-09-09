import React from 'react';

const Form = props => {
    const defaultState = {
    name: "",
    email: "",
    password: "",
};

const [newForm, setNewForm] = React.useState(defaultState);

const handleChange = event => {
    // console.log(event.target.name);
    console.log(event.target.value);
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setUsers([...props.users, newForm]);
    setNewForm(defaultState);
    console.log("submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={newForm.name}
        placeholder="Name"
      />
      <input
        onChange={handleChange}
        type="text"
        name="email"
        value={newForm.email}
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        value={newForm.role}
        placeholder="Password"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default Form;