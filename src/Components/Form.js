import React from 'react';


function Form(props) {
    const { values, change, submit, disabled, errors } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        change(name, inputValue);
    }
    return (
        <form className="form container" onSubmit={onSubmit}>
            <div> 
                <h2>User Info:</h2>
                <p>
                    <label>
                        User Full Name : 
                        <input value={values.name} onChange={onChange} name="name" type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Password : 
                        <input value={values.password} onChange={onChange} name="password" type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        E-mail : 

                        <input value={values.email} onChange={onChange} name="email" type="text"/>
                    </label>
                </p>


                <label>
                    Do you accept the Terms of Service? 
                    <input value={values.terms} onChange={onChange} name="terms" type="checkbox"/>
                </label>

                <div className="form-group submit">
                    <h3> Add User </h3>
                    <button disabled={disabled}>submit</button>   

                    <div className="errors">
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                    </div> 
                </div> 


            </div>
        </form>
    );
};






export default Form;  