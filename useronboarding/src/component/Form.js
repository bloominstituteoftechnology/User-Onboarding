import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
 width: 100%;
 height:25rem;
 display: flex;


@media ${props => props.theme.breakpointMobile} {
    width: 100%
    display: flex;
    background: black;
}

.container {
    border: 1px solid red;
    position: relative;
}
.inputs {
    border: 1px green solid;
    position: absolute;
    margin-left: 16rem;
}

h2 {
    color: green;
}

h4 {
    color: red;
}

.user {
    color: white;
}

.email {
    color: white;
}

.pw {
    color: white;
}

.tos {
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
                    <button disabled={disabled}>submit</button>
                    <div className='errors'>
                        <div>{errors.username}</div>
                        <div>{errors.email}</div>
                        {/* <div>{errors.password}</div> */}
                    </div>
                </div>

                </div>
            </div>
        </form>
        </StyledDiv>

    )
}