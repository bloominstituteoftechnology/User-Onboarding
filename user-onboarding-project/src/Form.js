import React from 'react'
 
export default function Form(props) {
    const {
       values,
    } = props
 
 
    return (
        <form>
            <div>
                <h2>Become a member</h2>
            </div>
 
            <div>
                <h4>Enter your info</h4>
 
                <label>Username
                    <input
                        name='username'
                        type='text'
                        value={values.username} // this is checking state for the value, but won't work without change handler
                        // onChange={onChange}
                    />
                </label>
 
                <label>Email
                    <input
                        name='email'
                        type='email'
                        value={values.email} // this is checking state for the value, but won't work without change handler
                        // onChange={onChange}
                    />
                </label>
 
                <label>Password 
                    <input // how to make the characters not visible
                        name='password'
                        type='text'
                        value={values.Password} // this is checking state for the value, but won't work without change handler
                        // onChange={onChange}
                    />
                </label>
 
                <label>Role
                   <select
                    // onChange={onChange}
                    values={values.role}
                    name='role'
                    >
                        <option value=''>Select your role -</option>
                        <option value='driver'>Driver</option>
                        <option value='mover'>Mover</option>
                   </select>
                </label>
 
                <label>Terms of Service
                    <input
                        type='checkbox'
                        checked={ values.terms }
                        name='terms'
                        value='yes'
                        // onChange= {onChange}
                    />
                </label>
 
                <button>Submit</button>
            </div>
        </form>
    )
 
 
} 
