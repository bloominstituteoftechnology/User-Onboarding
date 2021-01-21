import React, { useState } from "react";
import * as yup from "yup";

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required field"),
    email: yup.string().email("Must be a valid email address").required(),
    terms: yup.boolean().oneOf([true], "must be checked"),
  });

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const intputChange = (e) => {
    console.log("input changed", e.target.value);
    setFormState({
      name: e.target.value,
      email: e.target.value,
      password: e.target.value,
    });
  };
  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input id="name" type="text" name="name" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" name="password" />
      </label>

      <label htmlFor="className=" terms>
        <input type="checkbox" name="terms" checked={true} />
        Terms & Conditions
      </label>

      <button type="submit"> Submit</button>
    </form>
  );
};

export default Form;
