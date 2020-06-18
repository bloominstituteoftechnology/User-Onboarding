import React, {useState} from 'react'

export default function MemberForm (props) {
    // deconstruct props so you can have access to them here, theser are the purple words in memberform that you pass in.
    const {values, onSubmitHandler, onInputChange, data} = props;
    return (
        // 1 and 1a
        <form onSubmit={onSubmitHandler}>
            <div>
                <h2>Add User</h2>
            </div>
                <label>Name: </label>
                <input
                    type="text"
                    placeholder="Your Name"
                    maxLength="25"
                    name="personName"
                    // value=''
                    onChange={onInputChange}
                />
                <label>Email: </label>
                <input
                    type="text"
                    placeholder="Email123@email.com"
                    maxLength="25"
                    name="email"
                    // value=''
                    onChange={onInputChange}
                />
                <label>Password: </label>
                <input
                    type="text"
                    placeholder="Password123!"
                    maxLength="10"
                    name="password"
                    // value=''
                    onChange={onInputChange}
                />
                <label>Terms of Service
                <input 
                    name="tos"
                    type="checkbox"
                    // onChange={}
                    // checked=''
                />
                </label>
                <button type='submit'>Login</button>
                {/* This is just putting the data response onto the screen to make sure that it is working */}
                <pre>{JSON.stringify(data)}</pre>
        </form>
    )
}