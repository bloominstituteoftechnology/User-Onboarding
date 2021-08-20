import React from 'react';

export default function UserForm(props)
{
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt =>
    {
        evt.preventDefault();
        submit();
    };

    const onChange = evt =>
    {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Friend</h2>

                {/* 🔥 DISABLE THE BUTTON */}
                <button disable={disabled}>submit</button>

                <div className='errors'>
                    {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.role}</div>
                    <div>{errors.civil}</div>
                </div>
            </div>
            );
};