import React from 'react'

/* Form needs:
name, email, pw, tos, submit

*/

export default function () {
    return (
        <section>
            <p>Sign up is quick and simple. Please fill out the following information.</p>
            <form>
                <label htmlFor='name'>
                    Name:
                    <input type='text' id='name' name='name' placeholder='Phoenix Wright'/>
                </label>
                <label htmlFor='email'>
                    Email:
                    <input type='text' id='email' name='email' placeholder='pwright@aceattorney.com'/>
                </label>
                <label htmlFor='password'>
                    Password:
                    <input type='text' id='password' name='password' placeholder='**********'/>
                </label>
                <label htmlFor='tos'>
                    <input type='checkbox' checked id='tos' name='tos'/>
                    I have read and agree to the <a href='google.com' target='_blank'>Terms of Service</a>.
                </label>
                <button type='submit'> Register </button>
            </form>
        </section>
    )
}