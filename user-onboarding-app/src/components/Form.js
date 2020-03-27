import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required('Wouldnt it be better if you had a name?'),
  email: yup
    .string()
    .email('Why wont you enter a VALID email?')
    .required('We only want members with an email'),
  role: yup.string().required('You want to do something, dont you?'),
});

const Form = ({ teamList, setTeamList }) => {
  //set state for button disability
  const [buttonDisabled, setButtonDisabled] = useState(true);
  //Set state for form inputs
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    email: '',
  });
  // set state for errors
  const [errors, setErrors] = useState({
    name: '',
    role: '',
    email: '',
  });
  // set state for post request. So we can console.log it
  const [post, setPost] = useState([]);
  // control disability of button
  useEffect(() => {
    formSchema.isValid(newMember).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [newMember]);
 
  const validateChange = e => {
    // reach will allow us to reach into schema and test only one part
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  // set handleChange fuction
  function handleChange(e) {
    e.persist();
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
    validateChange(e);
  }
  //set handleSubmit function
  function handleSubmit(e) {
    e.preventDefault();
    setTeamList([...teamList, newMember]);

    axios
    .post("https://reqres.in/api/users", newMember)
    .then(response => {
        setPost(response.data) //get just the form from the REST api

        // reset form if succesful
        setNewMember({
            name: '',
            role: '',
            email: ''
        })
    })
    .catch(error => console.log(error.response))
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" value={newMember.name} onChange={handleChange}></input>
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label>
      <br />
      <label htmlFor="role">
        Role:
        <input type="text" name="role" value={newMember.role} onChange={handleChange}></input>
        {errors.role.length > 0 ? <p className="error">{errors.role}</p> : null}
      </label>

      <br />
      <label htmlFor="email">
        Email:<input type="email" name="email" value={newMember.email} onChange={handleChange}></input>
        {errors.email.length > 0 ? <p className="error"> {errors.email}</p> : null}
      </label>
      <br />
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button disabled={buttonDisabled}> Sign Up Here</button>
    </form>
  );
};

export default Form;
