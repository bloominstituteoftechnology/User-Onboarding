import React from 'react';

export default function person_form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange= evt => {
        const { name, value, checked, type } = evt.target;
        const value_to_use = type === 'checkbox' ? checked : value;
        change(name, value_to_use);
    }

    return (

        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group-submit'>
                <h2>Add a Person</h2>
                <button disabled={disabled}>submit</button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>

            <div className="form-group inputs">
                <h4>General Information</h4>
                <label>Username&nbsp;
                    <input
                        value={values.username}
                        onChange={onChange}
                        name="username"
                        type="text"
                    />
                </label>
                <label>Email
                    <input
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>
                <label>Password
                    <input
                        value={values.email}
                        onChange={onChange}
                        type="password"
                    />
                </label>
                <label>Terms of Service
                    <input
                        type="checkbox"
                        name="terms_of_service"
                        onChange={onChange}
                        checked={values.terms_of_service}
                    />
                </label>
            </div>
        </form>
    )
}
















































