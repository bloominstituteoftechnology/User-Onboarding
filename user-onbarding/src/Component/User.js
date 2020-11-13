import React from 'react'


function User({details}){
    console.log('Hello', details)
    if (!details) {
        return <h3>Fetching User Information....</h3>
      }
      return(
          <div className ='user container'>
            <h2>{details.first_name} {details.last_name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
          </div>
      )
}

export default User;