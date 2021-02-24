import React from 'react'

export default function Form(props){
    const { values, change } = props



    return (
        <form className ='the-form' >
        <div className='form-container'>
            <h2>Onboarding Information</h2>
            <label>Name:
                <input
                onChange={change}
                value={values.name}
                name='name'
                type='text'
                />
            </label>
            <label>Email:
                <input
                onChange={change}
                value={values.email} 
                name='email'
                type='email'
                />
            </label>
            <label>Password:
                <input 
                onChange={change}
                value={values.password}
                name='password'
                type='text'
                />
            </label>
            <label>Check to Agree to Terms
                <input
                onChange={change}
                checked={values.agree} 
                name='agree'
                type='checkbox'
                />
            </label>
            <button>Submit Information!</button>
        </div>
        </form>
    )

}