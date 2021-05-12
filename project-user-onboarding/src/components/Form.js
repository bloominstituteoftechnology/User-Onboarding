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
            <div className="form-group submit">
                <h2> Add User </h2>
                <button disabled={disabled}>submit</button>   

                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div> 
            </div> 

            <div> 
                <h4>User Info:</h4>
                {/* ---------- INPUTS --------- */}
                {/* ---------- INPUTS --------- */}
                {/* ---------- INPUTS --------- */}
                {/* ---------- INPUTS --------- */}

                <label><br/>
                    Full Name: 
                    <input value={values.name} onChange={onChange} name="name" type="text"/>
                </label>
                <label><br/><br/>
                    E-mail: 

                    <input value={values.email} onChange={onChange} name="email" type="text"/>
                </label><br/><br/>
                <label>
                    password: 
                    <input value={values.password} onChange={onChange} name="password" type="text"/>
                </label>
                {/* ---------- TERMS --------- */}
                {/* ---------- TERMS --------- */}
                {/* ---------- TERMS --------- */}
                {/* ---------- TERMS --------- */}
                <label><br/><br/>
                    Do you acccept the Terms of Service?
                    <input value={values.terms} onChange={onChange} name="checkbox" type="checkbox"/>
                </label>




            </div>
        </form>
    );
};






export default Form;