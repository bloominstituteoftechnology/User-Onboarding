import React from "react";

const Form = (props) => {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group submit">
                <h2>Fill out the following:</h2>

                <button id="submitBtn" disabled={disabled}>submit</button>

                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>
            </div>

            <div>
                <label> Name
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label> Password
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                    />
                </label>
                <label> Email
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='email'
                    />
                </label>
                <label> Terms of Service
                    <input 
                        value={values.tos}
                        onChange={onChange}
                        name='tos'
                        type='checkbox'
                    />
                </label>
            </div>
        </form>
    )
}

export default Form;