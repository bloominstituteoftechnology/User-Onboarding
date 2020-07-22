import React from 'react'; 

export default function Form() {

    return(
        <form className='form-wrapper'>
            <label htmlFor='nameInput'>
                Name:
                <input
                id='nameInput'
                name='name'
                type='text'
                placeholder='Enter Your Name'
                maxLength='25'
                />
            </label>
        </form>
    )
}