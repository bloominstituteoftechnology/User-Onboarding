import React from 'react';

export default function Form(props){
    const { values,submit,change,disabled,errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    const onChange = (evt) => {
        const { name, value,type,checked } = evt.target;
        const realValue = type === 'checkbox'? checked:value
        change(name,realValue)
    }
    
    return(
       <form className = "form-container" onSubmit={onSubmit}>
           <div className="name">
           <label>First Name:</label>
           <input 
            type="text"
            value={values.first_name}
            name="first_name"
            onChange={onChange}
            />
            <div className="errors">{errors.first_name}</div>
            
           <label>Last Name:</label>
           <input 
            type="text"
            value={values.last_name}
            name="last_name"
            onChange={onChange}
            />
            <div className="errors">{errors.last_name}</div>
            </div>
            <div className="form-item">
           <label>Email: </label>
           <input 
            type="email"
            value={values.email}
            name="email"
            onChange={onChange}
            />
            <div className="errors">{errors.email}</div>
            </div>
            <div className="form-item">
           <label>Password: </label>
           <input 
            type="password"
            value={values.password}
            name="password"
            onChange={onChange}
            />
            </div>
            <div className="form-item">
           <label>Terms of Service:</label>
           <input 
            type="checkbox"
            checked={values.terms_of_service}
            name="terms_of_service"
            onChange={onChange}
            />
            </div>
            <button id = "submit" disabled={disabled}>Submit</button>

            
       </form>
    )
}