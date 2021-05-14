import React from 'react';



function Form(props) {
    const { values, change, submit, disabled, errors } = props;



    return (
        <form className="form container" onSubmit={submit}>
            <div className="form-group submit">
                <h2> Add User </h2>
                   
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
                    <input placeholder="type here" value={values.name} onChange={change} name="name" type="text"/>
                </label>
                <label><br/><br/>
                    E-mail: 

                    <input placeholder="type here" value={values.email} onChange={change} name="email" type="text"/>
                </label><br/><br/>
                <label>
                    password: 
                    <input placeholder="type here" value={values.password} onChange={change} name="password" type="password"/>
                </label>
                {/* ---------- TERMS --------- */}
                {/* ---------- TERMS --------- */}
                {/* ---------- TERMS --------- */}
                {/* ---------- TERMS --------- */}
                <label><br/><br/>
                    Do you acccept the Terms of Service?
                    <input value={values.terms} onChange={change} name="terms" type="checkbox"/>
                </label><br/><br/>



                <button disabled={disabled}>submit</button>
              
            </div>
        </form>
    );
};






export default Form;