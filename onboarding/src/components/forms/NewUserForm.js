import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import '../../css/index.css';

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup
        .string()
        .email("Must be a valid email address")
        .matches(/^(?!waffle@syrop.com$)/, "Email already in use")
        .required("Must include email address"),
    role : yup
        .string(),    
    password: yup.string().required("Password is a rerquired field"),
    terms: yup.boolean().oneOf([true], "Please agree to terms of use")
});


const NewUserFrom = (props) => {

    // state managment
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
        terms: false
    });

    // error state
    const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
        terms: ""
    });

    // save our posted data
    const [users, setUsers] = useState([]);

    // disable submit button intil form is valid
    const [buttonDisabled, setButtonDisabled] = useState(true);

    // validate our form
    const validate = e => {
        let value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                });
            });
    };

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid); // enable submit button if form is valid
        });
    }, [formState]);

    // onChange function
    const inputChange = e => {
        e.persist();
        validate(e);
        let value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
    };

    // submit the form and grab the results
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setUsers(res.data); 
            console.log("success", users);
            // reset the form if all is good
            setFormState({
              name: "",
              email: "",
              role: "",
              password: "",
              terms: ""
            
            });
          })
          .catch(err => console.log(err.response));
      };


    return (
        <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={inputChange}
        />
        {errorState.email.length > 0 ? (
          <p className="error">{errorState.email}</p>
        ) : null}
      </label>


      <label className="role" htmlFor="role">
        Your role would be?
        <select
          value={formState.role}
          name="role"
          id="role"
          onChange={inputChange}
        >
          <option value="TL">TL</option>
          <option value="React">React</option>
          <option value="Design">Design</option>
          <option value="Testing">Testing</option>
        </select>
        {errorState.role.length > 0 ? (
          <p className="error">{errorState.role}</p>
        ) : null}
      </label>


      <label htmlFor="password">
        Password
        <input
          type ="password"  
          name="password"
          id="password"
          value={formState.password}
          onChange={inputChange}
        />
        {errorState.password.length > 0 ? (
          <p className="error">{errorState.password}</p>
        ) : null}
      </label>
      <label className="formTerms" htmlFor="terms">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        Terms & Conditions
       
      </label>
      {errorState.terms.length > 0 ? (
          <p className="error">{errorState.terms}</p>
        ) : null}
      <button disabled={buttonDisabled}>Submit</button>
      {users.name ? <pre>{JSON.stringify(users, null, 2)}</pre> : ""}
    </form>
    );
}

export default NewUserFrom;

/*/* displaying our post request data 
<pre>{JSON.stringify(post, null, 2)}</pre>*/