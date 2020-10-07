import React, {useState, useEffect} from "react";
import * as yup from "yup";


export default function Form() {
//manages state for the form inputs
const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false

})

const [buttonIsDisabled, setButtonIsDisabled] = useState(true);


const [post, setPost] = useState([]);

const validateChange = (e) => {};

const formSubmit = (e) => {};


const inputChange = (e) => {};



const formSchema = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup.string().email(),
    password: yup.string().min(6).required("Password must be 6 characters long"),
    terms: yup.boolean().oneOf([true])

})



useEffect(() =>{
    formSchema.isValid(formState).then((valid)=> {
        console.log("is this working?", valid);


        setButtonIsDisabled(!valid)
    })
}, [formState])


return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          name="email"
          value={formState.email}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <textarea
          id="password"
          type="text"
          name="password"
          value={formState.password}
          //review this later
          onChange={inputChange}
        />
      </label>
      {/* <label htmlFor="positions">
        Drop down menu
        {}
        <select
          id="positions"
          name="positions"
          value={formState.positions}
          onChange={inputChange}
        ></select>
      </label> */}
      <label htmlFor="terms" className="terms">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          value={formState.terms}
          onChange={inputChange}
        />
        Terms & Conditions
      </label>
      <button type="submit" disabled={buttonIsDisabled}>
        Submit
      </button>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </form>
  );




}