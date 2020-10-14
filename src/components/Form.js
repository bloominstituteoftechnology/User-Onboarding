import React from 'react';
import '../App.css';

function Form(props) {

    const {values, errors, change, submit} = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

    return (
    <form className="form-container" onSubmit={onSubmit}>
        <div className="form-group submit">
            <h2>User Onboarding Form</h2>
            <button>Submit!</button>
            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>


        </div>

        <div className="form-group inputs">
            <label>
                Name: 
                <input 
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    type="text"
                />
            </label>
            <label>
                Email: 
                <input 
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type="text"
                />
            </label>
            <label>
                Password: 
                <input 
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    type="text"
                />
            </label>
        </div>
        <div className="form-group checkbox">
            <label> I have read and agree to the Terms of Service
                <input 
                    type="checkbox"
                    name="tos"
                    checked={values.tos}
                    onChange={onChange}
                />
            </label>
        </div>
    </form>
    );
 
}

export default Form;