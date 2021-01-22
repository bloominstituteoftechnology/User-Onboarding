import React, {useState, useEffect } from 'react';

import axios from 'axios';
import * as yup from 'yup';
//keep the (inputs?) & formschema as separate components?
 import formSchema from './component/formSchema.js';

 

export default function Form() {
    //Two slices of state, users & error
    const [usersState, setUsersState] = useState([{
        name: '',
        email: '',
        password: '',
        terms: false
    }]);
  
    const [errorState, setErrorState] = useState([{   
        name: '',
        email: '',
        password: '',
        terms: false
    }]);

    //for submit button to turn on/off depending on validation
    const submitDisabled = true; 

    //formSubmit function, axios post -> getting data & sending our gathered data
    const formSubmit = evt => {
        evt.preventDefault();
        console.log('form submitted!');
        axios.post('http://reqres.in/api/users', usersState) 
        .then( res => console.log(res), setUsersState(res))
        .catch(err => console.log(err))
    }; 
    //useEffect --> 1. first load page (getting data) 2. when updating state 3. when you need it to run at a prop update
    //Because I'm submitting a form, this doesn't apply to needing my axios request wrapped in a useEffect

    //validate function - validating the form fields with yup
    const validate = (evt) => {
    yup.reach(formSchema.evt.target.name)
        .validate(evt.target.value) 
        .then(res => {
            setErrorState({
                ...errorState,
                [evt.target.name]: ""
            })
        })
        .catch(err => {
            console.log(err.errors)
            setErrorState({
                ...errorState,
                [evt.target.name]: err.errors[0]
            })
        })

    }; 

    //onChange function - keeps evt variable relevant, runs validate function, checks the validation sets the state
    const inputChange = evt => {
        evt.persist();
        validate(evt);
        let value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value; 
        setUsersState({ ...usersState, [evt.target.name] : evt.target.value}) 
    }


    return(
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>
                name
                <input 
                type='text' 
                value={formState.name} //This value is what makes it controlled input. React is now controlling what is visualized.
                onChange={inputChange}
                />
            </label>
            <label htmlFor='motivation'>
                <textarea 
                    name='motivation' 
                    id='motivation' 
                    value={formState.motivation} 
                    onChange={inputChange} 
                /> 
                {errorState.email.length > 0 ? <p className='error'>{errorState.email}</p> : null}  
            </label>

            <label htmlFor='positions'>
                What would you like to help with?
                <select 
                    value={formState.position} 
                    name='position'
                    id='positions'
                    onChange={inputChange}
                    >
                        <option value='Newsletter'>Newsletter</option>
                        <option value='Yard Work'>Yard Work</option>
                        <option value='Administration'>Administrative Work</option>
                </select>{/*The select element will hold it's own state on the dom, but will not reflect the React state change, which we want it to.*/}
                {/*So we need to add the position property into the state*/}
            </label>
        
            {/*option value --> tells our select what the value of the select should be, the value is what we use internally, different from what the user will see.
            we will have a value on select too which will be different */}
            <label htmlFor='terms'>
                Terms and Conditions
                <input 
                type='checkbox' 
                id="terms" 
                name="terms"
                checked={formState.terms}
                />
            </label>
        
        </form>
    );
}
