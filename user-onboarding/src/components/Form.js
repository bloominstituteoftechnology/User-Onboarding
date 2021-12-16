import React from 'react';
import styled from 'styled-components';

// styling
const StyledFormContainer = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    /* flex-direction: column; */
    justify-content: center;
    /* text-align: center;  */

    /* align-content: center; */
`
const StyledInputs = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: flex-end;
    /* align-content: center; */

    label {
    margin-right: 10px;
    }
`

export default function Form(props){
//    destructure props obj.
    const {
        values,
        change,
        submit,
        disabled,
        errors
    } = props;

// on submit function
const onSubmit = evt =>{
    evt.preventDefault()
    submit()
}
// on change function
const handleChange = evt =>{
    // destructure evt
    const{
        name,
        value,
        checked,
        type
    } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    console.log(evt)
    change(name, valueToUse)
}



// include these in form
// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.

    return (
        <form className='formContainer' onSubmit={onSubmit}>
            <div className='formDiv'>
                {/* <div className='topOfForm'> */}
                    <div className='errors'>
                    {/* validation errors here */}
                    <div>{errors.firstName}</div>
                    <div>{errors.lastName}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                    </div>
                {/* </div> */}

                <div>
                    {/* inputs here */}
                    <div className='firstNameDiv'>
                    <label>First Name
                    <input
                    type='text'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                    />
                    </label>
                    </div>

                    <div className='lastNameDiv'>
                    <label>Last Name
                    <input
                    type='text'
                    name='lastName'
                    value={values.lastName}
                    onChange={handleChange}
                    />
                    </label>
                    </div>

                    <div className='emailDiv'>
                    <label>Email
                    <input
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    />
                    </label>
                    </div>

                    <div className='passwordDiv'>
                    <label>Password
                    <input
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    />
                    </label>
                    </div>

                    <div className='termsDiv'>
                    <label>Agree To Terms of Service
                    <input
                    type='checkbox'
                    name='terms'
                    checked={values.terms}
                    onChange={handleChange}
                    />
                    </label>
                    </div>

                    <div className='submit'>
                    <button id='submitBtn' disabled={disabled}>submit</button>
                    </div>

                </div>
            </div>

        </form>
    )
}