import React from 'react'
//the meat and potatoes of the app, this sets up the form. 



export default function Form(props) {
    const {values, submit, change, errors} = props;
    return (
    <form className = 'form-container'>
        <div className = 'errors'>
            <div>test error</div>
        </div>
        <div className="form-inputs">
            <label>Name
                <input 
                    type='text'
                    name='name'
                    value={values.name}
                    placeholder='Type your name'
                />
            </label>
            <label>Email
                <input 
                    type='email'
                    name='email'
                    value={values.email}
                    placeholder='Type your email'
                />
            </label>
        </div>
    </form>
    );
}