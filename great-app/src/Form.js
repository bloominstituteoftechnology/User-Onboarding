import './App.css';
import React from 'react'

function App(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props
    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked: value;
        change(name, valueToUse);
    } 
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return (
        <form className = 'form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name&nbsp;
                    <input 
                    value = {values.name}
                    onChange = {onChange}
                    name = 'name'
                    type = 'text'
                    />
                </label>

                <label>Email
                    <input
                    value = {values.email}
                    onChange = {onChange}
                    name = 'email'
                    type = 'text'
                    />
                </label>

                <label>Password
                    <input
                    value = {values.pass}
                    onChange = {onChange}
                    name = 'pass'
                    type = 'text'
                    />
                </label>

                <label>Terms Of Service
                    <input
                    type = 'checkbox'
                    name = 'tos'
                    onChange = {onChange}
                    checked = {values.tos}
                    />
                </label>

                <button id = 'submit' disabled={disabled}>submit</button>
                <div className = 'errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.role}</div>
                    <div>{errors.civil}</div>
                </div>

            </div>
        </form>
    );
}

export default App;