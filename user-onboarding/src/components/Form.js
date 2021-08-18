import React from 'react';


const Form = (props) => {
    const { formValues, disabled } = props;

    const onChange = (event) => {
        console.log(event.target.name);
    }
    return (
        <div>
            <h3>This is a Form! </h3>
            <form>
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
                <button disabled={disabled}>Submit</button>
            </form>
        </div>
    )
}

export default Form;