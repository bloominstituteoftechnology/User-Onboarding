import React, { useState } from 'react'
import axios from 'axios';

import {registerSchema} from './schemas';


const Form = props => {

    //We are controlling the forms input using a state variable which contains keys for each input in the form
    //these values are initialized to empty strings for each input except for "Terms of Service"(TOS) because a user expects
    //inputs to be empty when entering a form for the first time (and false in the case of terms of services checkbox)
    const initialValues = {
        name: "",
        email: "",
        password: "",
        TOS: false
    }

    //set up formValues state 
    const [formValues, setFormValues] = useState(initialValues);

    //initialize errors variable in state as an empty array which can eventually hold errors that occur
    //erros is mapped over in the case the there are erros and they are textually displayed to the screen
    const [errors, setErrors] = useState([]);


    //handleChange is our event handler function which helps to manage the state of form values for each input it updates the "formValues"
    //state to reflect the user's input
    const handleChange = e => {
        //console dir'ing e.target to look at the specific input tag that is part of the event in order to reason about the data it is providing to the function
        console.dir(e.target);

        //control flow set up to deal with the checkbox input which must be handled differently then textual inputs 
        if(e.target.name !== "TOS")
            //setting the state "formValues" using its partner setter function we pass in a object which retains its internal structure + the newly made change to the specific input
            //from which this event was fired. The spread operator is used to give this new object all the values currently in "formValues" (every key present + their values)
            //the specific value for the incoming input is change by referencing its name which corresponds to one of the  keys inside the "formValues" object (i.e they match) 
            setFormValues({
                ...formValues,
                //the key name has to be put in brackets because it is a variable that needs to be resolved 
                [e.target.name]: e.target.value
            });
        else {
            //in the case of TOS e.target.checked is reference instead of e.target.value because this is the specific value that gives us the information we are looking for 
            //(i.e checked or not)
            setFormValues({
                ...formValues,
                TOS: e.target.checked
            });
        }
        //console logging formValues to make sure they are changing according to expectations 
        console.log(formValues);
    }

    //handleSubmit is our event handler function which validates our input data using the yup library it is attached to the onClick attribute on the submit button below

    //on success it POSTs the data to the url below gets that data back and adds it to the "users" array declared in "App" "Form"s HOC finally the formsValues object is reset
    //to initial values
    //on failure it adds all present errors to the errors array above 
    const handleSubmit = e => {
        //this prevents the page from refereshing on submit this is default behavior 
        e.preventDefault();

        //start validation over the schema defined in the schemas file using the validate method on it
        //the validate method is asynchrounous and thus requires a "then/catch" block to resolve correctly 
        //formValues is passed in as the data to be evaluated the schema has keys which corresponds to the keys contained in "formVales"
        //The second arguement configures yup to return all errors instead of the first one it comes across 
        registerSchema.validate(formValues, { abortEarly: false })
        .then( _ => {
            //POST request first arg is URL second arg is the formValues object we wish to send to the server 
            axios.post('https://reqres.in/api/users', formValues)
            .then(res => {
                //reset errors because there are none 
                if(errors.length > 0){
                    setErrors([]);
                }
                //on resolve console log to make sure the response is what is expected 
                console.log(res);
                //add returned user object to the array user objects declared in "App"
                props.setUsers([...props.users, res.data])
                //reset form 
                setFormValues(initialValues);
            })
            .catch(err => {
                //log error using dir to change in into an object 
                console.dir(err);
            });
        })
        .catch(err => {
             //log error using dir to change in into an object 
            console.dir(err);
            //yup returns an error object with a key named "inner"; "inner" contains all currently present validation errors in an array
            //we set Errors to the current errors by spreading "inner" into an array
            setErrors([...err.inner]);
        })
        
        
    };
    //JSX which contains the components necessary to faciliate a form 
    //input tags have many attributes which has to be utilized
    //"name" used to indentify each particular input the state data set up to take in the input mirrors these names the validation schema does so as well
    //"type" which defines what type of input we are using
    //onChange which takes in the handler function above to monitor user input
    //value which is a literal reflection of the current values in each input (in the case of text acutal text) checkbox instead has a defaultCheck attribute which starts off as false
    return(
        <form>
            <input
                name="name"
                type="text"
                data-cy="input-name"
                onChange={handleChange}
                value={formValues.name}
                />
            <input
                name="email"
                type="email"
                data-cy="input-email"
                onChange={handleChange}
                value={formValues.email}
                />
            <input
                name="password"
                type="password"
                data-cy="input-password"
                onChange={handleChange}
                value={formValues.password}
                />
            <input
                name="TOS"
                type="checkbox"
                data-cy="input-TOS"
                onChange={handleChange}
                checked={formValues.TOS}
                defaultChecked={formValues.TOS}
                />
            {/* button has the handleSubmit function tied to its onClick attribute it is fired on clicking it */}
            <button data-cy="submit-button" onClick={handleSubmit}>Submit</button>
            {/* this chuck of JSX maps over the errors if present and accesses their "message" to display a message for each error message*/}
            <div data-cy="error-output">
                {errors.map( err => (  
                    <p style={{color: "red"}}>{err.message}</p>
                ))}
            </div>
        </form>
    )
}

export default Form;