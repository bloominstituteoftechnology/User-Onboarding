import React, {useState} from 'react';

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
}

//validation 
const validateEmail = (email) => {

}

//onChange call-back Function 
const inputChange = event => {
    if(event.target.name === 'email') {
        validateEmail(event.target.value)
    }
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