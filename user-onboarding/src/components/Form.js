import React from 'react'




export default function Form(props){

    const {values, submit, change, disabled, errors} = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    const onChange = (evt) =>{
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === "checkbox" ? checked: value;
        change(name, valueToUse)
    }
    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group-submit'>
                <h2>Add Person</h2>

                <button disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>

            <div className='form-inputs'>
                <label>
                    Name
                    <input
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}

                    />
                </label>

                <label>
                    Email
                    <input 
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Password
                    <input 
                        name='password'
                        type='text'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Terms of Service
                    <input 
                        name='service'
                        type='checkbox'
                        value='service'
                        checked={values.service === 'service'}
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    );
}