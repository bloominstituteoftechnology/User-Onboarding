export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked  : value;
        change(name, valueToUse)
    }

    return (
        <form className="form container" onSubmit={onChange}>
            <div className='form-group submit'>
                <h3>User SignUp</h3>
                <button disabled={disabled}>submit</button>
            
                <div className='errors'>
                    <div>{errors.firstname}</div>
                    <div>{errors.lastname}</div>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsofservice}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>User Information</h4>
                <label>First Name
                    <input
                        value={values.firstname}
                        onChange={onChange}
                        name='firstname'
                        type='text'
                    />
                </label>
                <label>Last Name
                    <input
                        value={values.lastname}
                        onChange={onChange}
                        name='lastname'
                        type='text'
                    />
                </label>
                <label>Username&nbsp;
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                </label>
                <label>Email
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label>Password
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>
                <label>Terms of Servive
                    <input
                        type='checkbox'
                        name='termsofservice'
                        checked={values.termsofservice}
                        onChange={onChange}
                    />
                </label>
            </div> 
        </form>
    )
}

