
import React from 'react'


export default function Onboarding(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox'? checked : value;
        change(name, valueToUse);
    }
    
    return(
        <form className='login-form' onSubmit={onSubmit}>
            <div>
                <h1>HApPy LoGgiNG</h1>
                <div className='login'>
                    <h2>Login</h2>
                    <label>
                        Name
                        <input
                        name='name'
                        type='text'
                        // value={values.name}
                        onChange={change}
                        >
                        </input>
                    </label>
                    <label>
                        Email
                        <input
                        name='email'
                        type='text'
                        // value={values.email}
                        onChange={change}
                        >
                        </input>
                    </label>
                    <label>
                        Password
                        <input
                        name='password'
                        type='text'
                        // value={values.password}
                        onChange={change}
                        >  
                        </input>
                    </label>
                </div>
                <div className='terms-checkbox'>
                    <label>
                        Terms
                        <input
                        type='checkbox'
                        name='terms'
                        // checked={values.terms}
                        onChange={onChange}
                        >
                        </input>
                    </label><br></br>
                    <button>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
    
    
};

    //need name
    //email
    //password
    //terms of service checkbox
    //submit button to send form data to server


