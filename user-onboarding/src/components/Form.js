import React from 'react';
import styled from "styled-components"

const Styled_div = styled.div`
  color: gray;
  font-family: 'Noto Sans Mono', monospace;
  border-radius: 5%;
`
const Styled_button = styled.button`
  color: darkslategrey;
  border-radius: 12%;
  text-decoration: none;
  
`
const Styled_label = styled.label`
  
`



export default function person_form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange= evt => {
        const { name, value, checked, type } = evt.target;
        const value_to_use = type === 'checkbox' ? checked : value;
        change(name, value_to_use);
    }

    return (

        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group-submit'>
                <Styled_div>
                        <h2>Add a Person: </h2>
                </Styled_div>
                <Styled_button>
                    <button id={'sb'} disabled={disabled}>submit</button>
                </Styled_button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>

            <div className="form-group inputs">
                <h4>General Information</h4>
                <label>Username:&nbsp;
                    <input
                        value={values.username}
                        onChange={onChange}
                        name="username"
                        type="text"
                    />
                </label>
                <label>Email:&nbsp;
                    <input
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>
                <label>Password:&nbsp;
                    <input
                        value={values.password}
                        onChange={onChange}
                        type="password"
                        name="password"
                    />
                </label>

                {/*<div className="container">*/}
                {/*    <form action="/action_page.php">*/}
                {/*            <label htmlFor="psw">Password</label>*/}
                {/*            <  input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"*/}
                {/*                     title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"*/}
                {/*                     required/>*/}
                {/*    </form>*/}
                {/*</div>*/}

                {/*<div id="message">*/}
                {/*    <h3>Password must contain the following:</h3>*/}
                {/*    <p id="letter" className="invalid">A <b>lowercase</b> letter</p>*/}
                {/*    <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>*/}
                {/*    <p id="number" className="invalid">A <b>number</b></p>*/}
                {/*    <p id="length" className="invalid">Minimum <b>8 characters</b></p>*/}
                {/*</div>*/}
                <label>Terms of Service
                    <input
                        type="checkbox"
                        name="terms_of_service"
                        onChange={onChange}
                        checked={values.terms_of_service}
                    />
                </label>
            </div>
        </form>
    )
}
















































