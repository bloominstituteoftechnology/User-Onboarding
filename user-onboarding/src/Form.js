import React from 'react';

function Form() {


    
    return (
      <div className="Form">
        <h1>Hello There</h1>
        <form>
            <label>Username:
                <input type='text' placeholder='Your Username'/>
            </label>
            <label>Email:
                <input type='text' placeholder='Your Email'/>
            </label>
            <label>Password:
                <input type='text' placeholder='Your Password'/>
            </label>
            <label className='tos'>Terms Of Service:
                <input type='checkbox' />
            </label>
        </form>
      </div>
    );
  }
  
  export default Form;
  