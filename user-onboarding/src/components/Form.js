import React from 'react';

const Form = (props) => {
    
    return (
        <div>
            <form>
                <label>
                    Name: 
                    <input type='text' 
                    placeholder='Name' 
                    name='name' />
                </label>
            </form>
        </div>
    )
}

export default Form