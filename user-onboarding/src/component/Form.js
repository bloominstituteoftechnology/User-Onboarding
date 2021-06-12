import React from 'react';

export default function Form() {
    return (
        <div className='formComponent'>
            <form>
                <label>
                    Name
                    <input type='text' name='name'/>
                </label>

                <label>
                    Email
                    <input type='email' name='email'/>
                </label>

                <label>
                    Password
                    <input type='password' name='password'/>
                </label>

                <label>
                    Terms of Service
                    <input type='checkbox' name='term'/>
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}