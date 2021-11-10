import React from 'react';

export default function Form(props){
    const {values,submit,change,disabled} = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    const onChange = (evt) => {
        const { name, value } = evt.target;
        change(name,value)
    }
    
    return(
       <form onSubmit={onSubmit}>
           <label>First Name:</label>
           <input 
            type="text"
            value={values.first_name}
            name="first_name"
            onChange={onChange}
            />
            <br/>
           <label>Last Name:</label>
           <input 
            type="text"
            value={values.last_name}
            name="last_name"
            onChange={onChange}
            />
            <br/>
           <label>Email:</label>
           <input 
            type="email"
            value={values.email}
            name="email"
            onChange={onChange}
            />
            <br/>
           <label>Password:</label>
           <input 
            type="password"
            value={values.password}
            name="password"
            onChange={onChange}
            />
            <br/>
           <label>Terms of Service:</label>
           <input 
            type="checkbox"
            value={values.terms_of_service}
            name="terms_of_service"
            onChange={onChange}
            />
            <br/>
            <button disabled={disabled}>Submit</button>
       </form>
    )
}