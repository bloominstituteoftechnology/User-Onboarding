import React, { useState } from 'react';

export default function UserForm(props) {

    const { values, update, submit } = props

    const [form, setForm] = useState({terms: false });

    const onChange = event => {
        const { name, value } = event.target
        update(name, value)
        const { checked } = event.target;
        // const updatedInfo = type === 'checkbox' ? checked: value;
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return(
        <form className='form-container'>
            <div className='form-group inputs'>
                <label>Name
                    <input 
                        type='text'
                        value={values.name}
                        placeholder='Name'
                        name='name' maxLength='30'
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input 
                        type='text'
                        value={values.email}
                        placeholder='Email'
                        name='email' maxLength='50'
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                        type='text'
                        value={values.password}
                        placeholder='Password'
                        name='password' maxLength='25'
                        onChange={onChange}
                    />
                </label>
                <label>Terms and Conditions
                    <input
                        name='terms'
                        type='checkbox'
                        checked={form.terms}
                        onChange={onChange}
                    />
                </label>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}