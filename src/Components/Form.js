import React from 'react';
import styled from 'styled-components';


export default function Form(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }

      const onSubmit = (evt) => {
          evt.preventDefault()
          submit()
      }

    //   
    return (
        <form onSubmit={onSubmit}> 
            <div>
                <h2>Add User</h2>
                <div>
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsOfService}</div>
                </div>
            </div>

            <StyledGeneral>
                <div class='genInfoDiv'>
                <label>Name&nbsp;
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
                </label>

                <label>Email
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                />
                </label>

                <label>Password
                <input
                    onChange={onChange}
                    value={values.password}
                    name='password'
                    type='text'
                />
                </label>
                {/* ////////// CHECKBOX ////////// */}
                <label>Sell Your Soul?
                <input  type='checkbox' name='termsOfService' checked={values.termsOfService} 
                onChange={onChange}
                />
                </label>
                </div>
                <button disabled={disabled} >submit</button>
            </StyledGeneral>
            <hr/>
        </form>
    )
}


const StyledGeneral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`