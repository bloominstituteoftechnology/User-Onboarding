import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
 width: 100%;
 height:25rem;
 background: black;
 display: flex;

.container {
    width: 100%;
}

h2 {
    color: green;
}

h4 {
    color: red;
    font-size: 1.5rem;
}

.user {
    color: white;
    font-size:1.5rem;
}

.email {
    color: white;
    font-size:1.5rem;
}

.pw {
    color: white;
    font-size:1.5rem;
}

.tos {
    color: red;
    font-size:1.5rem;
}

.errors {
    color: red;
}

`





export default function OnBoardingForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <StyledDiv>

        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
            <h2>New User</h2>
                <h4 className='info'>General information</h4>

                <label className='user'>Username
                    <input 
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    typr='text'
                    />
                </label>

                <label className='email'>Email
                    <input 
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                    />
                </label>
                
                <label className='pw'>Password
                    <input 
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                    />
                </label>
                
                <div className='form-group checkboxes'>
                    <label className='tos'>Terms of Service
                        <input 
                            type='checkbox'
                            name='tos'
                            onChange={onChange}
                            checked={values.tos}
                        />
                    </label>

                <div className='form-group submit'>
                    <button id='submitBtn' disabled={disabled}>submit</button>

                    <div className='errors'>
                        <div>{errors.username}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.tos}</div>
                    </div>
                </div>

                </div>
            </div>
        </form>
        </StyledDiv>

    )
}