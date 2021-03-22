import React from 'react';

export default function UserForm(props) {

    const { formValues, updateForm, submitForm, disabled, errors } = props

    return(
        <form className='form-container' onSubmit={submitForm}>
            <div className='form-group inputs'>
                <label>Name
                    <input 
                        type='text'
                        value={formValues.name}
                        placeholder='Name'
                        name='name' maxLength='30'
                        onChange={updateForm}
                    />
                </label>
                <label>Email
                    <input 
                        type='text'
                        value={formValues.email}
                        placeholder='Email'
                        name='email' maxLength='50'
                        onChange={updateForm}
                    />
                </label>
                <label>Password
                    <input 
                        type='text'
                        value={formValues.password}
                        placeholder='Password'
                        name='password' maxLength='25'
                        onChange={updateForm}
                    />
                </label>
                <label>Terms and Conditions
                    <input
                        name='terms'
                        type='checkbox'
                        checked={formValues.terms}
                        onChange={updateForm}
                    />
                </label>
                <div className='submit'>
                    <button disabled={disabled}>submit</button>

                    <div className='errors'>
            
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                    </div>
                </div>
            </div>
        </form>
    )
}