import React, {useState} from 'react';


//form requirements⬇⬇⬇⬇⬇
//name, email, password, terms of service (checkbox), submit button to send data to server

export default function FormLabels (props) {
    
    const [form, setForm]= useState({
        name: '',
        email: '',
        password: '',
        tos: false,
    })
 

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueChecked = type === 'checkbox' ? checked : value
        setForm({...form, [name]: valueChecked})
    }

    return (
    
    <form className='container'>
    <div className='form-inputs'>  
        <label>Name
            <input 
            onChange={change}
            value={form.name}
            name='name' 
            type='text'
            placeholder='enter name'
            maxLength='35'/>
        </label>

        <label>Email
            <input 
            onChange={change}
            value={form.email}
            name='email' 
            type='text'
            placeholder='provide valid email address'
            maxLength='40'/>
        </label>

        <label>Password
            <input 
            onChange={change}
            value={form.password}
            name='password' 
            type='text'
            placeholder='create password'/>
        </label>

        <label>Terms of Service
            <input 
            onChange={change}
            checked={form.tos}
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