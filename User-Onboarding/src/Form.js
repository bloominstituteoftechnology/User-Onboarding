import React from "react";
import * as yup from 'yup';



const initialOnboardValues = {
    // Text Inputs
    name: ''
    email: ''
    password: ''
    // checkboxes
    termsOfService: false;

}


const onChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
};

// FORM VALIDATION / SCHEMA - "Does it fit the scheme of the form : satisfy the goal of collecting information"

const formSchema = Yup.object().shape({
    name:
        .string()
        .name("Who art thou?")
        .max(50, "More than 50 characters? Online forms must be a chore for you.")
        .required("Not having a name must make life tough.")
    email: 
        .string()
        .email("Real emails only, please.")
        .required("For hittin' you up with updates"),
    password:
        .string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Password is Required")
    termsOfService:
        .boolean()
        ..oneOf([true], "Read it or don't but we need you to at least pretend you read it.")

});

export default function Form(props) {

}

return(
    <form className = "form" onSubmit={onSubmit}>
        <label>
            <input
                name="username"
                type="text"
                onChange={onChange}
                value={formValues.username}
                placeholder="Member Name" //<< initial text shown to User
                maxLength="30" //<< max character limit
            />
            <br/>
            <input 
                name="email"
                type="text"
                onChange={onChange}
                value={formValues.email}
                placeholder="Your Email Here!"
                maxLength="30"
            />
            <br/>
            <input
                name="role"
                type="text"
                onChange={onChange}
                value={formValues.role}
                placeholder="Your Role"
                maxLength="30"
            />
            <br/>
            <input
                name="termsOfService"
                type="checkbox"
                onChange={onChange}
                value={formValues.role}
                placeholder="Please agree to Terms of Service!"
            />
            <button>Submit!</button>
        </label>
    </form>
    )
}
