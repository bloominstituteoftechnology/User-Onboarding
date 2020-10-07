import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";


export default function Form() {
//manages state for the form inputs
const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false

})
const [serverError, setServerError] = useState("");

const [buttonIsDisabled, setButtonIsDisabled] = useState(true);


const [post, setPost] = useState([]);

// const validateChange = (e) => {
//     yup
//     .reach(formSchema, e.target.name)
//     .validate(
//         e.target.type === "checkbox" ? e.target.checked : e.target.value
//       )
// };

const formSubmit = (e) => {
    e.preventDefault(); // <form> onSubmit has default behavior from HTML!

    // send out POST request with obj as second param, for us that is formState.
    // trigger .catch by changing URL to "https://reqres.in/api/register" -> see step 7 in notion notes
    axios
      .post("https://reqres.in/api/users", formState)
      .then((resp) => {
        // update temp state with value from API to display in <pre>
        setPost(resp.data);

        // if successful request, clear any server errors
        setServerError(null); // see step 7 in notion notes

        // clear state, could also use a predetermined initial state variable here
        setFormState({
            name: "",
            email: "",
            password: "",
            terms: false
        });
      })
      .catch((err) => {
        // this is where we could create a server error in the form! if API request fails, say for authentication (that user doesn't exist in our DB),
        // set serverError
        setServerError("oops! something happened!");
      });
  };


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