import React from 'react';

function Form(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <button disabled={disabled} type="submit">Submit</button>
                <div>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
            <div>
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
                <label>
                    Terms of Service
                    <input 
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>

        ///User Card///

    );
}

export default Form;

