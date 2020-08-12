import React, {useState} from 'react';
import * as yup from 'yup';

const Form = () => {
 //setting state for form data

const [formData, setFormData] = useState({
    name: '',
    email:'',
    password:'',
    terms: true
});
//state for button
    const [buttonDisabled, setButtonDisabled] = useState(true);
//change handler
    const change = event => {
        const newFormData = {
            ...formData, 
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked: event.target.value
        }
        setFormData({newFormData});
    }
//submit function
const submitFunction = event => {
    event.preventDefault();
}
    return(
        <form>
            <label htmlFor = "name">
                Name
                <input type = "text" 
                       name = "name"
                       value = {formData.name}
                       onChange = {change}
                />
            </label>
            <label htmlFor = "email">
                Email
                <input type = "email" 
                       name = "email"
                       value = {formData.email}
                       onChange = {change}
                />
            </label>
            <label htmlFor = "password">
                Password
                <input type = "password" 
                       name = "password"
                       value = {formData.password}
                       onChange = {change}
                />
            </label>
            <label htmlFor = "terms">
                Terms of Service
                <input type = "checkbox" 
                       name = "terms"
                       checked = {formData.terms}
                       onChange = {change}
                />
            </label>
            <button disabled = {buttonDisabled} type = "submit">Submit</button>
        </form>
    );
}

export default Form;