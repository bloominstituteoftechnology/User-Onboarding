import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const Form = () => {
  const [post, setPost] = useState([]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required field"),
    email: yup.string().email("Must be a valid email address").required(),
    password: yup.string().password("Password is required"),
    terms: yup.boolean().oneOf([true], "must be checked"),
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log("error", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  console.log("error state", errors);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.rn/api/users", formState)
      .then((res) => {
        setPost(res.data);
        setFormState({
          name: "",
          email: "",
          password: "",
          terms: "",
        });
      })
      .catch((err) => console.log(err.response));
  };

  const inputChange = (e) => {
    console.log("input changed", e.target.value);
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);

    setFormState(newFormData);
    // name: e.target.value,
    // email: e.target.value,
    // password: e.target.value,
  };
  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          onChange={inputChange}
          value={formState.name}
        />
        {errors.name.length > 0 ? (
          <p className="error">{errors.name} </p>
        ) : null}
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          onChange={inputChange}
          value={formState.email}
        />
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </label>
      <label
        htmlFor="password"
        onChange={inputChange}
        value={formState.password}
      >
        Password
        <input type="password" name="password" onChange={inputChange} />
      </label>
      {errors.password.length > 0 ? (
        <p className="error">{errors.password}</p>
      ) : null}

      <label htmlFor="className=" terms>
        <input
          type="checkbox"
          name="terms"
          checked={true}
          onChange={inputChange}
          checked={formState.terms}
        />
        Terms & Conditions
      </label>

      <pre>[JSON.stringfly(post, null, 2)]</pre>
      <button disabled={isButtonDisabled} type="submit">
        {" "}
        Submit
      </button>
    </form>
  );
};

export default Form;
