import React from 'react';

//************************************ */
//Fill this out once you know what values you need
//************************************ */
//************************************ */
//************************************ */

export default function Form(props){

    const {formErrors, disabled, formValues, setFormValues, users, setUsers, change, submitUser} = props;

    const onChange = event => {
        const {name, value, checked, type} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse);
    }

    const onSubmit = event => {
        event.preventDefault();
        
        submitUser()
    }

    return (
        <>

        {/* <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          /> */}
          <div className='form-container'>
          <form onSubmit={onSubmit}>
            <label>Name:
                <input 
                    value={formValues.name}
                    onChange={onChange}
                    type='text'
                    name='name'
                />  
            </label>
            <label>Email:
                <input 
                    value={formValues.email}
                    onChange={onChange}
                    type='text'
                    name='email'
                />  
            </label>
            <label>Password:
                <input 
                    type='password'
                    name='password'
                    value={formValues.password}
                    onChange={onChange}
                />  
            </label>
            <label>Please read our<a>User Agreement</a>
                <input 
                    type='checkbox'
                    name='userAgreement'
                    value={formValues.userAgreement}
                    onChange={onChange}
                />
            </label>
        <div className='errors'>
          <div>{formErrors.name}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.userAgreement}</div>
        </div>
            <button disabled={disabled}>
                Submit Form
            </button>
        </form>
        </div>
        </>
    )
}