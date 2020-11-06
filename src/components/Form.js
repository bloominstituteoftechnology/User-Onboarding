import React from 'react';
import Styled from 'styled-components';

const FormMaker = Styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Set = Styled.div`

    display: flex;
`;

const Form = (props) => {

    const {values, onInputChange, onCheckboxChange, onSubmit, disabled, errors} = props;

    return (
        <div>
            <FormMaker onSubmit={onSubmit}>
                <FormMaker>
                    <div>{errors.fullname}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </FormMaker>
                <Set>
                    <label htmlFor='fullname'>Name: </label>
                    <input 
                        id='fullname'
                        name='fullname'
                        type='text'
                        placeholder='Please enter your name.'
                        value={values.fullname}
                        onChange={onInputChange}
                        required
                    />
                </Set>
                <Set>
                    <label htmlFor='email'>E-mail: </label>
                    <input 
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Please enter your e-mail address.'
                        // pattern='user@domain.com if you are requiring an email from a specific domain.  Work, school, etc.
                        value={values.email}
                        onChange={onInputChange}
                        required
                    />
                </Set>
                <Set>
                    <label >Password: </label>
                    <input 
                        id='password'
                        name='password'
                        type='password'
                        placeholder='******'
                        minLength='6'
                        value={values.password}
                        onChange={onInputChange}
                        required
                    />
                </Set>
                <Set>
                    <label htmlFor='terms'>Accept the terms of service</label>
                    <input 
                        id='terms'
                        name='terms'
                        type='checkbox'
                        value={values.terms}
                        onChange={onCheckboxChange}
                        required
                    />
                </Set>
                <button disabled={disabled}>Submit</button>                
            </FormMaker>
        </div>
    )
}

export default Form