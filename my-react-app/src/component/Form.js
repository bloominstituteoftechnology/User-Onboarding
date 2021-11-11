import React from 'react'

function Form (props) {

    const { handleUser, handleEmail, handleButton, handlePassword, tofService } = props
    console.log(props)



    return (

        <div className="formInfo">

       
        <label>Username
            <input
            type="text"
            name="username"
            onChange={handleUser}
            />
        </label>

        <label> Email
            <input
            type="email"
            name="email"
            onChange={handleEmail}
            />
            
        </label>

        <label>Passwords
            <input
            type="text"
            name="passwords"
            minLength="8"
            onChange={handlePassword}
            />
            </label>

           <label> Terms of Service
               <input
               type="checkbox"
               name="checkbox"
               onChange={tofService} 
               />
               </label>

        <button onClick={handleButton}>Add Alien</button>

        
        </div>
    )
}

export default Form