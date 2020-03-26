import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from "yup";

//form schema
const formSchema = yup.object().shape({
   name: yup
            .string()
            .required('name is required'),      
   email: yup
            .string()
            .email('must be valid email')
            .required('email is required'), 
   password: yup
                .string()
                .required('password is required'),
   terms: yup
            .boolean().oneOf([true])
            .required('must agree to the terms')
})

const usersArray = [];

export default function Form(){

    /*----------STATES-----------*/
        //state for users
        const [users, setUsers] = useState(usersArray);
        //state for form
        const [formState, setFormState] = useState({
            name: '',
            email: '',
            password: '',
            terms: ''
        })
        //state for if the button is disabled
        const [buttonDisabled, setButtonDisabled] = useState(true);
        //state for errors
        const [errors, setErrors] = useState({
            name: '',
            email: '',
            password: '',
            terms: ''
        })
        //state for the post request
        const [post, setPost] = useState([]);
    
     /*----------UseEffects/EventHandlers-----------*/
        //checks the schema
        //disables the button unless the whole form is valid
        useEffect(()=>{
            formSchema
                .isValid(formState)
                .then(valid=>{
                    setButtonDisabled(!valid);
                })
        },[formState])
        //reaches into the schema
        //checks if individual inputs are valid
        //handles an error if something is invalid
        const validateChange = e=>{
            yup
                .reach(formSchema, e.target.name)
                .validate(e.target.value||e.target.checked)
                .then(valid=>{
                    setErrors({
                        ...errors,
                        [e.target.name]: ''
                    })
                })  
                .catch(error=>{
                    setErrors({
                        ...errors,
                        [error.target.name]: error.errors[0]
                    })
                })
        }
        //input change handler
        //validates the changes
        //sets the form state to the new inputs
        const inputChange = e=>{
            e.persist();
            const newFormData = {
                ...formState,
                [e.target.name]: 
                e.target.type === 'checkbox'? e.target.checked: e.target.value    
            }
            validateChange(e);
            setFormState(newFormData);
        }
        //submit handler
        //resets form if successful
        //logs data
        const formSubmit = e=>{
            e.preventDefault();
            axios
                .post("https://reqres.in/api/users", formState)
                .then(response=>{
                    setPost(response.data)
                    console.log(post)
                    setFormState({
                        name: '',
                        email: '',
                        password: '',
                        terms: ''
                    })
                })
                .catch(err=> console.log(err.response))
        }


    return(
        <form onSubmit = {formSubmit}>

            <label htmlFor = 'name'>
                Name
                <input
                    type = 'text'
                    name = 'name'
                    placeholder = 'Name'
                    value = {formState.name}
                    onChange = {inputChange}
                />
            </label>
            {errors.name.length > 0? <p>{errors.name}</p>:null}

            <label htmlFor = 'email'>
                Email
                <input
                    type = 'text'
                    name = 'email'
                    placeholder = 'Email'
                    value = {formState.email}
                    onChange = {inputChange}
                />
            </label>
            {errors.email.length > 0? <p>{errors.email}</p>:null}

            <label htmlFor = 'password'>
                Password
                <input
                    type = 'text'
                    name = 'password'
                    placeholder = 'Password'
                    value = {formState.password}
                    onChange = {inputChange}
                />
            </label>
            {errors.password.length > 0? <p>{errors.password}</p>:null}
            <br/>

            <label htmlFor = 'terms'>
                Terms and Conditions
                <input
                    type = 'checkbox'
                    name = 'terms'
                    placeholder = 'Terms and Conditions'
                    checked = {formState.terms}
                    onChange = {inputChange}
                />
            </label>
            {errors.name.length > 0? <p>{errors.name}</p>:null}
            <br/>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button disable={buttonDisabled}>Submit</button>

        </form>



    )
}
