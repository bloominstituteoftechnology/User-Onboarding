import React from 'react';


const Form = (props) => {
    const { formValues, forErrors, disabled, inputChange, submitForm } = props;

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        inputChange(name,valueToUse);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submitForm();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
            <h3>Add a Team Member</h3>
                <label> First Name: 
                    <input
                        type="text"
                        name="first_name"
                        value={formValues.first_name}
                        onChange={onChange}
                    />
                </label>

                <label> Last Name: 
                    <input
                        type="text"
                        name="last_name"
                        value={formValues.last_name}
                        onChange={onChange}
                    />
                </label>

                <label> Email: 
                    <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={onChange}
                    />
                </label>

                <label> Password: 
                    <input
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={onChange}
                    />
                </label>

                <label> Role: 
                    <select name="role" value={formValues.role} onChange={onChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="Team Lead">Team Lead</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </label>
                <label> Terms of Service:  
                    <input 
                        type="checkbox"
                        name="termsOfService"
                        checked={formValues.termsOfService}
                        onChange={onChange}
                    />
                </label>
                <button disabled={disabled}>Submit</button>
            </form>
        </div>
    )
}

export default Form;