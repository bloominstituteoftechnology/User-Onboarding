import React from 'react';

export default function User({details}){
    if (!details) {
        return <h3>Working fetching users&apos;s details...</h3>
      }
      return(
        <div className='user-container'>
            <p>Name: {details.firstName} {details.lastName}</p>
            <p>Email: {details.email}</p>
        </div>
      )
}