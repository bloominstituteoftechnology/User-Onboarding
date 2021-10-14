import React from 'react';

export default function UserForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form inputs'>
                <div className='name'>
                    <label> First Name: 
                        <input 
                            type='text'
                            name='firstName'
                            value={values.firstName}
                            onChange={onChange}
                        />
                    </label>
                    <label> Last Name:
                        <input 
                            type='text'
                            name='lastName'
                            value={values.lastName}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className='email'>
                    <label> Email: 
                        <input 
                            type='email'
                            name='email'
                            value={values.email}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className='password'>
                    <label> Password: 
                        <input 
                            type='password'
                            name='password'
                            value={values.password}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className='email'>
                    <label> Terms of Service: 
                        <input 
                            type='checkbox'
                            name='termsOfService'
                            value={values.termsOfService}
                            onChange={onChange}
                        />
                    </label>
                </div>
            </div>
        </form>
    )
}

