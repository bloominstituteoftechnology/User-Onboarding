import React from 'react';
import '../App.css';

function Form(props) {

    //// DESTRUCTURE PROPS
    const {values, errors, change, submit} = props;

    //// BUILD OUT EVENT LISTNERS

    // Submit Event listener
    const onSubmit = (evt) => {
        evt.preventDefault(); // Don't want to reload the page - kinda defeats the purpose
        submit(); // == formSubmit passed down from props - makes user and posts to api, sets user to state, and resets fromValues to intial
    };

    // Track changes listner
    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target; //Destructure evt object
        const valueToUse = type === "checkbox" ? checked : value; // Determinig the value to use out of the object THIS IS THE CHECKBOX HOLD UP
        change(name, valueToUse); // Validates inputs set to formValue state
    };

    const isDisabled = () => {
        return !values.name.trim() || !values.email.trim() || !values.password.trim() || !values.tos 
    }

    return (
        // On Submit put on parent container
        <form className="form-container" onSubmit={onSubmit}> 
            <div className="form-group submit">
                <h2>User Onboarding Form</h2>
                <button disabled={isDisabled()}>Submit!</button>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>


            </div>
            {/* ON change on each input  */}
            <div className="form-group inputs">
                <label>
                    Name: 
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                    />
                </label>
                <label>
                    Email: 
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>
                <label>
                    Password: 
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="text"
                    />
                </label>
            </div>
            <div className="form-group checkbox">
                <label> I have read and agree to the Terms of Service
                    <input 
                        type="checkbox"
                        name="tos"
                        checked={values.tos}
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    );
 
}

export default Form;