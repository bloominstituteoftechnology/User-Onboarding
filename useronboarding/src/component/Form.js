import React, {useState, useEffect} from "react"



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
      <label htmlFor="motivation">
        Why would you like to help?
        <textarea
          id="motivation"
          name="motivation"
          value={formState.motivation}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="positions">
        Why would you like to help with?
        {/* multiselect with select HTML Input w/ multiple attributes. 
        Value of option is what is passed into e.target.value when clicked. 
        Value of select is the way to keep formState in sync with the select. 
        We can also use this to preset values as shown with Tabling in formState's initial value. */}
        <select
          id="positions"
          name="positions"
          value={formState.positions}
          onChange={inputChange}
        ></select>
      </label>
      <label htmlFor="terms" className="terms">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          value={formState.terms}
          onChange={inputChange}
        />
        Terms & Cs
      </label>
      <button type="submit" disabled={buttonIsDisabled}>
        Submit
      </button>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </form>
  );




}