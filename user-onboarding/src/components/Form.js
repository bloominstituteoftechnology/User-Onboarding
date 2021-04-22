import React, {useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required("What is your name?!"),
    email: yup.string().email("invalid email").required("must include email"),
    password: yup.string().required("tell me your password"),
    terms: yup.boolean().oneOf([true], "agree to sell your soul")
})

const Form = (props) => {
//Managing state for form inputs
const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    terms: false

})

//onSubmit call-back function
const formSubmit = event => {
    event.preventDefault();
    console.log('form submitted!');
    setFormState({
    name: '',
    email: '',
    password: '',
    terms: false
    })
    axios
    .post('https://reqres.in/api/users', formState)
    .then( res => {
        console.log(res);
    })
    .catch(err => console.log(err));
}

const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    terms: ''
})

//validation 
const validate = (event) => {
    yup.reach(schema, event.target.name)
    .validate(event.target.value)
    .then(valid => {
        setErrors({
            ...errors,
            [event.target.name]: ""
            
        })
    })
    .catch(err => {
        console.log(err.errors);
        setErrors({
            ...errors,
            [event.target.name]: err.errors[0]
        })
    })
}

//onChange call-back Function 
const inputChange = event => {
    validate(event)
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormState({...formState, [event.target.name]: value})
}

    return (
        <div>
            <form onSubmit={formSubmit}>
                <label>
                    Name: 
                    <input type='text' 
                    value={formState.name}
                    onChange={inputChange} 
                    name='name' />
                </label>
                <label>
                    Email: 
                    <input type='email' 
                    value={formState.email}
                    onChange={inputChange} 
                    name='email' />
                </label>

                {errors.email.length > 0 ? <p>{errors.email}</p> : null} 

                <label>
                    Password: 
                    <input type='password' 
                    value={formState.password}
                    onChange={inputChange} 
                    name='password' />
                </label>

                <br />

                <label>
                    I have agreed to sell my soul 
                    <input type='checkbox' 
                    value={formState.terms}
                    onChange={inputChange}
                    checked={formState.terms} 
                    name='terms' />
                </label>
               
                  <br />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form