import React from 'react'

export default function User({details}){
    if(!details){
    return <h3>Working fetching your friend&apos;s details...</h3>
    }

    return (
        <div className='friend container'>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            
        </div>
    )
}