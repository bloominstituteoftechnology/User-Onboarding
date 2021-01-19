import React from 'react';


//form requirements⬇⬇⬇⬇⬇
//name, email, password, terms of service (checkbox), submit button to send data to server

export default function Form (props) {

 
return (
    
    <form className='container'>
    <div className='form-inputs'>  
        <label>Name
            <input 
            name='name' 
            type='text'
            placeholder='enter name'
            maxLength='35'/>
        </label>

        <label>Email
            <input 
            name='email' 
            type='text'
            placeholder='provide valid email address'
            maxLength='40'/>
        </label>

        <label>Password
            <input 
            name='password' 
            type='text'
            placeholder='create password'/>
        </label>

        <label>Terms of Service
            <input 
            name='tos' 
            type='checkbox'
            placeholder='please read and agree to the following terms of service'/>
        </label>

        <div className='submit'>
            <button>Submit</button>
        </div>
        </div>
        </form>



)

}