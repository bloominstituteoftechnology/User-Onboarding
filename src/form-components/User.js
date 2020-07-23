import React from 'react'

export default function User({info}) {
    if(!info) {
        return <h2>Sorry cowboy, still riding!</h2>
    }

    return (
        <div className='user-container'>
            <h2>{info.username}</h2>
            <h3>Email: {info.email}</h3>
            <h3>Password: {info.password}</h3>
            {
            !!info.terms && !!info.terms.length &&
            <div>
                <h2>Legal Requirements:</h2>
          <ul>
            {info.terms.map((like, idx) => 
            <li key={idx}> {like}</li>)}
          </ul>
        </div>
      }
        </div>
    )
}