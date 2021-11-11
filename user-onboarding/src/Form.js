import React from 'react';

const Form =(props) => {
    const { change, submit , errors } = props;
    const {name, email, password, tos,} = props.value;
  
    const onChange = evt => {
        const { name,  value, checked, type } = evt.target
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue)
    }

        const onSubmit = evt => {
            evt.preventDefault()
            submit()
        }
        
        return(
        <form onSubmit={onSubmit}>
        <div>
          <h1>Welcome to the form!</h1>
          <p>{errors.name}</p>
          <p>{errors.password}</p>
          <p>{errors.email}</p>
          <p>{errors.tos}</p>

          <label> Name
          <input
              type='text'
              name='name'
              value={name} 
              onChange={onChange}
          />
          </label> 
          <label> Email
          <input
              type='text'
              name='email'
              value={email} 
              onChange={onChange}
             
          />
        
          </label> 
          <label> Password
          <input
              type='text'
              name='password'
              value={password}
              onChange={onChange} 
          />
          </label> 
          <label> Terms of Service
          <input
              type='checkbox'
              name='tos'
              checked={tos}
              onChange={onChange}
              
          />
          </label> 
         <button disabled={disabled}>Submit</button>
        </div>
      </form>
    )
  }
               
    export default Form;