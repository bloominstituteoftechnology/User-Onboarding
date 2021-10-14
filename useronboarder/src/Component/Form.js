import React from 'react';

export default function Form(props) {
    const { formVals, update, submit, disabled, errors  } = props;

    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        update(name,valueToUse)
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className="form-container" onSubmit = {onSubmit} >
            <div className="form-submit">
                <h2>Add a user</h2>
                <button disabled = {disabled}>Submit</button>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.serviceTerms}</div>
                </div>
                <div className="form-input">
                    <h2>User Info</h2>
                    <label>Name
                        <input
                        type="type"
                        name="name"
                        value={formVals.name}
                        onChange={onChange}
                        />
                    </label>
                    <h2>User Info</h2>
                    <label>Email
                        <input
                        type="type"
                        name="email"
                        value={formVals.email}
                        onChange={onChange}
                        />
                    </label>
                    <h2>User Info</h2>
                    <label>Password
                        <input
                        type="password"
                        name="password"
                        value={formVals.password}
                        onChange={onChange}
                        />
                    </label>
                    <h2>User Info</h2>
                    <label>Terms of Service
                        <input
                        type="checkbox"
                        name="serviceTerms"
                        checked={formVals.serviceTerms}
                        onChange={onChange}
                        />
                    </label>
                </div>
            </div>
        </form>
    )
}