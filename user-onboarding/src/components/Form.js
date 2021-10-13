import React from 'react';
import App from '../App';
import personForm from './personForm';
import axios from 'axios';

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a friend</h2>
                <button disabled={disabled}>SUMBIT</button>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.role}</div>
                    <div>{errors.civil}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>

                <label>Name;
                    <input 
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input
                        type='text'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                
                <label>Password
                    <input
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>

                <label>
                    <select
                        name='role'
                        onChange={onChange}
                        value={values.role}
                    >
                        <option value=''>Select and option</option>
                        <option value='student'>Student</option>
                        <option value='alumni'>Alumni</option>
                        <option value='instructor'>Instructor</option>
                        <option value='teamlead'>Team Lead</option>
                    </select>
                </label>

                <label> Single
                    <input 
                        type='radio'
                        name='civil'
                        value='single'
                        onChange={onChange}
                        checked={values.civil === 'single'}
                    />
                </label>
                <label> Married
                    <input 
                        type='radio'
                        name='civil'
                        value='married'
                        onChange={onChange}
                        checked={values.civil === 'married'}
                    />
                </label>
            </div>

            <div className='form-group checkboxes'>
                <h4>Hobbies</h4>

                <label> Hiking
                    <input
                        type='checkbox'
                        name='hiking'
                        onChange={onChange}
                        checked={values.hiking}
                    />
                </label>
                <label> Reading
                    <input
                        type='checkbox'
                        name='reading'
                        onChange={onChange}
                        checked={values.reading}
                    />
                </label>
                <label> Coding
                    <input
                        type='checkbox'
                        name='coding'
                        onChange={onChange}
                        checked={values.coding}
                    />
                </label>
            </div>
        </form>
    )
}