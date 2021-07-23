import React from "react";
import styled from "styled-components";

const StyledForm = styled.form `
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    
    color: slategray;
    background-color: lavender;

    border: 3px solid black;
    border-radius: 8px;
    
    padding: 2%;
`

const Styledinput = styled.div `
    display: flex;
    flex-direction: column;

    width: 45%;
    margin: 2%;
    padding: 10%;
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
            <div className="form-submit">

                <div className="errors">
                <div>
                    <h2>Submit New User</h2>
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
            <Styledinput className="form-group inputs">
                <h4>General information</h4>
                <label>
                    Username&nbsp;
                    <input
                        value={values.username}
                        onChange={onChange}
                        name="username"
                        type="text"
                    />
                </label>
                <label>
                    Email
                    <input
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>
                <label>Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    type="text"
                    />
                    </label>
                <label>Terms
                    <input
                    type='checkbox'
                    name='terms' 
                    onChange={onChange} 
                    checked={values.terms}
                    />
                    </label>
            </Styledinput>
        </StyledForm>
    );
}