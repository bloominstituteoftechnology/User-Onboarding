import React from "react";
import styled from "styled-components";

const StyledForm = styled.form `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    color: slategray;
    background-color: lavender;

    border: 3px solid black;
    border-radius: 8px;
    
    padding: 2%;
    width: 45%;

    h4 {
        color: darkcyan;
        font-size: 1.5rem;
    }
`

const StyledInput = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50%;
    margin: 2%;
    padding: 10%;

    .input-label {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: baseline;

        color: darkblue;
        font-size: .8rem;
    }
`

export default function OnboardingForm(props) {

    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse);
    };

    return (
        <StyledForm className="form-container" onSubmit={onSubmit}>
            <StyledInput className="form-group inputs">
                <h4>General information</h4>
                <label className="input-label">
                    <p>Username: </p>
                    <input
                        value={values.username}
                        onChange={onChange}
                        name="username"
                        type="text"
                    />
                </label>
                <label className="input-label">
                <p>Email: </p>
                    <input
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>
                <label className="input-label">
                    <p>Password: </p>
                    <input
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="text"
                    />
                </label>
                <label className="tos">
                    Terms of Service
                    <input
                        type='checkbox'
                        name='terms' 
                        onChange={onChange} 
                        checked={values.terms}
                    />
                </label>
            </StyledInput>
            <div className="form-submit">

                <div className="errors">
                <div>
                    <h3>Submit New User</h3>
                </div>

                <button id='submitBtn' disabled={disabled}>submit</button>
                    <div>
                        {errors.username}
                    </div>
                    <div>
                        {errors.email}
                    </div>
                    <div>
                        {errors.password}
                    </div>
                    <div>
                        {errors.terms}
                    </div>

                </div>
            </div>
        </StyledForm>
    );
}