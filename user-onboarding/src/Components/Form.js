import React from 'react'

export default function Form (){
    
    
    
    return (

        <form className='form container'>
            <div className='form-group submit'>
                <h2>Add A New User</h2>
                <button disabled>SUBMIT</button>

                <div className='errors'>
                    {/* <div> fname </div>  */}
                    {/* <div> lname </div> */}
                    {/* <div> email </div> */}
                    {/* <div> password </div> */}
                    {/* <div> terms </div> */}
                </div>
            </div>

            <div className='form-group input'>
                <h4>General Information:</h4>
                <label>First Name: 
                    <input 
                    name='fname'
                    type='text'
                    />
                </label>
                    
                <label>Last Name: 
                <input 
                    name='lname'
                    type='text'
                    />
                </label>

                <label>Email: 
                <input 
                    name='fname'
                    type='text'
                    />
                </label>

                <label>Password: 
                <input 
                    name='fname'
                    type='password'
                    />
                </label>
                <div className='form-group checkboxes'>
                    <h4>Terms of Service: please read prior before submitting:</h4>
                    <label>I agree: 
                        <input 
                        name='agree'
                        type='checkbox'
                        />
                    </label>
                    <label>I Disagree:
                    <input 
                        name='disagree'
                        type='checkbox'
                        />
                    </label>
                </div>
            </div>

        </form>
    )
}