import React, { useState } from "react";

const Form = () => {
  const defuaultState = {
    name: "",
    email: "",
    password: "",
    terms: false,
  };

  const [formState, setFormState] = useState(defuaultState);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const inputChange = (e) => {
    console.log("input changed to: ", e.target.value);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">
        Name
        <input type="text" name="name" />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;
