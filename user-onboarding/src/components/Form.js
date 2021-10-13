import React from 'react'

export default function UserForm(props){
    const{
        values,
        submit,
        change,
        disabled,
        errors,
    }= props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name,  value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add User</h2>
                <button disabled={disabled}>Submit</button>

                <div>
                    <div>{errors.first_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>

            <div>
                <h4>General User Information</h4>
                <label> Name:
                    <input
                        value={values.first_name}
                        onChange={onChange}
                        name='first_name'
                        type='text'
                    />
                </label>
                <label> Email:
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label> Password:
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>
                <div>
                <h4>Terms of Service</h4>
                    <p>
                        Demz da termz. Deal wit it!
                    </p>
                </div>
                <label>Agree
                    <input
                        type='checkbox'
                        name='agree'
                        onChange={onChange}
                        checked={values.agree}
                    />
                </label>
                <label>Disagree
                    <input
                        type='checkbox'
                        name='disagree'
                        onChange={onChange}
                        checked={values.disagree}
                    />
                </label>
            </div>
        </form>
    )
}