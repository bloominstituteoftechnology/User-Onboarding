import React from 'react'

//We need: 
//*Name (text field)
//*Email (text field)
//*Password (text field)
//*Terms of Service (checkbox)
//*Submit button (button)

export default function Form(props){
    const { values, submit, change, disabled, errors } = props;

    //onSubmit functionality
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    //onChange functionality
    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form className="formContainer" onSubmit={onSubmit}>
            <div className="formHeading">
                <h2>User Onboarding Form</h2>    
            </div>

            <div className="formInputs">
                <h4>Please Fill Out Form Below:</h4>
                {/* Text Inputs */}
                    <label htmlFor="first_name">
                        First Name: <input 
                        value={values.first_name}
                        onChange={onChange}
                        name="first_name"
                        type="text"
                        />        
                    </label>
                    <p>{errors.first_name}</p>
                    <label htmlFor="last_name">
                        Last Name: <input 
                        value={values.last_name}
                        onChange={onChange}
                        name="last_name"
                        type="text"
                        />        
                    </label>
                    <p>{errors.last_name}</p>

                    <label htmlFor="email">
                        Email: <input 
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                        />        
                    </label>
                    <p>{errors.email}</p>

                    <label htmlFor="password">
                        Password: <input 
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="text"
                        />        
                    </label>
                    <p>{errors.password}</p>
                
                {/* Checkbox */}
                <h5>Terms and Conditions</h5>
                    <label htmlFor="terms">
                        Accept: <input 
                        checked={values.terms}
                        onChange={onChange}
                        name="terms"
                        type="checkbox"
                        />        
                    </label>
                    <p>{errors.terms}</p>
            </div>
                
                {/* Submit button */}
                <button disabled={disabled}>Finalize</button>
        </form>
    )
}