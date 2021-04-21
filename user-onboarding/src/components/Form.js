import React, {useState} from 'react';

const Form = (props) => {
//Managing state for form inputs
const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    terms_of_service: false

})

//onSubmit call-back function
const formSubmit = event => {
    event.preventDefault();
    console.log('form submitted!');
}

//onChange call-back Function 
const inputChange = event => {
    setFormState({...formState, [event.target.name]: event.target.value})
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
                <label>
                    Password: 
                    <input type='password' 
                    value={formState.password}
                    onChange={inputChange} 
                    name='password' />
                </label>
                
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form