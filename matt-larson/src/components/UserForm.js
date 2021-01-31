import React from 'react'

function UserForm(props) {

    const{ 
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
        console.log(props)
    }

    const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form onSubmit = {onSubmit}>
            <div>
                <h1>New User</h1>
                <label>User Input<br></br>
                    <input 
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    placeholder = "name..."
                    type='text'>
                    </input>
                    <br></br>
                    <input 
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    placeholder = "email..."
                    type='text'>
                    </input>
                    <br></br>
                    <input 
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    placeholder = "password..."
                    type='text'>

                    </input>
                    <br></br>
                    <div>
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.terms}</div>
                    </div>
                    <br></br>
                    <label> I agree to the terms of service
                        <input
                        type = "checkbox"
                        name = "terms"
                        checked = {values.terms}
                        onChange = {onChange}></input>
                    </label>
                </label>
                <button id = "submitBtn" disabled = {disabled}>Submit</button>
            </div>
        </form>
    )
}

export default UserForm
