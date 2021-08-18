import React from 'react';


const Form = (props) => {
    const { formValues, disabled, inputChange, submitForm } = props;

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        inputChange(name,valueToUse);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("You hit submit")
        submitForm();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
            <h3>Add a Team Member</h3>
                <label> Username: 
                    <input
                        type="text"
                        name="name"
                        value={formValues.name}
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
                        <option value="teamLead">Team Lead</option>
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="designer">Designer</option>
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