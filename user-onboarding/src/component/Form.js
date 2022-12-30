import React from 'react';


export default function Form(props) {
    const{ 
      change, 
      submit, 
      errors,
      values,
      disabled,
    } = props;


    const onSubmit = evt => {
      evt.preventDefault();
      submit()
  }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
        
    }
  
return (
    <form className='form container' onSubmit={onSubmit}>
          <div className='form-group submit'>
            <h2>New User </h2>
            <div className='errors'>
              <p>{errors.username}</p>
              <p>{errors.email}</p>
              <p>{errors.password}</p>
              <p>{errors.termsOfService}</p>
              </div>
            <div className='form-group inputs'>
            <label>Username&nbsp;
              <input
                value={values.username}
                onChange={onChange}
                name='username'
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
                type='text'
                name='password'
                value={values.password}
                onChange={onChange}
                />
            </label>
            </div>
         <div className='form-group checkboxes'>
            <label>Terms Of Service
            <input
               type='checkbox'
               name='termsOfService'
               onChange={onChange}
               checked={values.termsOfService}
               />
            </label>
            <input type='submit' value= 'Create a User!' disabled={disabled}/>
        </div>
    </div>
        </form>
      )
}
