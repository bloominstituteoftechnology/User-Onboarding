import React from 'react'

//We need: 
//*Name (text field)
//*Email (text field)
//*Password (text field)
//*Terms of Service (checkbox)
//*Submit button (button)

export default function Form(props){
    const { values, submit, change, disabled } = props;

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
                <h2>User Onboarding Form!</h2>
                {/* errors would go here, I think */}
            </div>

            <div className="formInputs">
                <h4>Please Fill Out Form Below:</h4>
                {/* Text Inputs */}
                    <label>
                        Name: <input 
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                        />        
                    </label>

                    <label>
                        Email: <input 
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                        />        
                    </label>
                {/* Checkbox */}
            </div>
                
                {/* Submit button */}
                <button disabled={disabled}>Finalize</button>
        </form>
    )
}