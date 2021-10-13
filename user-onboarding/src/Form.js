

export default function Form(props) {

    const { values, update, submit, disabled, errors } = props


    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type==='checkbox' ? checked : value
        update(name, valueToUse)
    }
    const onSubmit = e => {
        e.preventDefault();

        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-container">
                <h1>User Onboarding</h1>
                <h2>Add User</h2>
                <label>First name:
                    <input
                        type="text"
                        name="first_name"
                        value={values.first_name}
                        onChange={onChange}
                    />
                </label>
                <label>Last Name
                    <input
                        type="text"
                        name="last_name"
                        value={values.last_name}
                        onChange={onChange}
                    />
                </label>
                <label>Email: 
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Password: 
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service: 
                    <input
                        type="checkbox"
                        name="termsOfService"
                        value={values.termsOfService}
                        onChange={onChange}
                        checked={values.termsOfService}
                    />
                </label>
                <button disabled={disabled}>submit</button>
                <div className="errors">
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.password}</div>
                    <div>{errors.email}</div>
                </div>
            </div>
        </form>
            
    )
}