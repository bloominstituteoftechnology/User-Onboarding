import React from 'react';

import './FormShape-styles.css'

const FormShape = props => {
    return (
        <div className='user'>
            {props.forms.map(form => (
                <div className='form' key={form.id}>
                    <h1 className='name'>{form.name}</h1>
                    <div className='email'>{form.email}</div>
                    <div className='password'>{form.password}</div>
                </div>
            ))}
        </div>
    )
}

export default FormShape;