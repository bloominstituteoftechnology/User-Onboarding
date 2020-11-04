import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Styled from 'styled-components';

const FormMaker = Styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Set = Styled.div`

    display: flex;
`;

const formSchema = yup.object().shape({

    email: yup.string()
        .email("Must use a valid email address."),

    password: yup.string().min(6, 'Passwords must be at least 6 chatracters long.'),

})

const Form = (props) => {

    const [user, setUser] = useState({fullname: '', email: '', password: '', terms: false });

    const handleChanges = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitForm = (e) => {

        e.preventDefault();
        props.addUser(user);
        setUser({ fullname: '', email: '', password: ''});
        axios.post('https://reqres.in/api/users', {
            user
        })
        .then(() => {
            console.log('New user added')
            alert('Thank you and welcome aboard!')
        })
        .catch((err) => {
            console.log('doh!', err)
            alert('Please try again.');
        })
    }

    return (
        <div>
            <FormMaker onSubmit={submitForm}>
                <Set>
                    <label htmlFor='fullname'>Name: </label>
                    <input 
                        id='fullname'
                        name='fullname'
                        type='text'
                        placeholder='Please enter your name.'
                        value={user.fullname}
                        onChange={handleChanges}
                        required
                    />
                </Set>
                <Set>
                    <label htmlFor='email'>E-mail: </label>
                    <input 
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Please enter your e-mail address.'
                        // pattern='user@domain.com if you are requiring an email from a specific domain.  Work, school, etc.
                        value={user.email}
                        onChange={handleChanges}
                        required
                    />
                </Set>
                <Set>
                    <label >Password: </label>
                    <input 
                        id='password'
                        name='password'
                        type='password'
                        placeholder='******'
                        minLength='6'
                        value={user.password}
                        onChange={handleChanges}
                        required
                    />
                </Set>
                <Set>
                    <label htmlFor='terms'>Accept the terms of  service</label>
                    <input 
                        id='terms'
                        name='terms'
                        type='checkbox'
                        required
                    />
                </Set>
                <button>Submit</button>                
            </FormMaker>
        </div>
    )
}

export default Form