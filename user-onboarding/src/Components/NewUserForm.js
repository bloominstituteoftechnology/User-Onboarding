// I will be used to gather input for the new user,
//  send that data to "App.js",
//  and reset my inputs

// import react
import React from 'react';

// export default with value, submit, change, disabled, and errors from props
const NewUserForm = (props) => {
    const { change, submit, errors } = props;
    const { username, email, password, tos } = props.values;

    // Define submit

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    // Define change

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    // 1. (1b) Return a form with a div for errors and (1a) div's for each form-group type 

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group submit" >
                <h2>Add A New User</h2>
                <button>Submit</button>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>

                <div className='form-group inputs'>
                    <label>Name:
                        <input
                            value={username}
                            onChange={onChange}
                            name='username'
                            type='text'
                        />
                    </label>

                    <label>Email:
                        <input
                            value={email}
                            onChange={onChange}
                            name='email'
                            type='text'
                        />
                    </label>

                    <label>Password:
                        <input
                            value={password}
                            onChange={onChange}
                            name='password'
                            type='text'
                        />
                    </label>

                    <label>Terms of Service:
                        <input
                            checked={tos}
                            onChange={onChange}
                            name='tos'
                            type='checkbox'
                        />
                    </label>
                    
                </div>
            </div>
        </form>
    )
}

export default NewUserForm;



