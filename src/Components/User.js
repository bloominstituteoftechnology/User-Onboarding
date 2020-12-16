import React from 'react';

export default function User({details}){
    if (!details) {
        return <h3>Working fetching users&apos;s details...</h3>
      }
      return(
        <div className='user-container'>
            <span>First Name: {details.firstName} --</span>
            <span>-- Last Name: {details.lastName}</span>
        </div>
      )
}