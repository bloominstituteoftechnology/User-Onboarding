import React from "react";

// Import stylesheet
import './OnboardingForm.css';

function OnboardingForm (props) {
    const { values, change, submit, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault(); // Stops default behavior of reloading browser window
        submit();
    };

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Name
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={onChange}
                />
            </label>

            <label>E-mail
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            { errors.email.length > 0 && <p className="error">{errors.email}</p> }

            <label>Set a Password
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onChange}
                    placeholder='8-12 characters'
                />
            </label>
            { errors.password.length > 0 && <p className="error">{errors.password}</p> }

            <label>Do you agree to the Terms of Service?
                <input
                    type='checkbox'
                    name='termsOfService'
                    checked={values.termsOfService}
                    onChange={onChange}
                    required
                />
            </label>
            <button>Submit</button>
        </form>
    );
}

export default OnboardingForm;