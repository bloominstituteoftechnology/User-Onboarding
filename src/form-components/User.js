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
            !!info.terms && info.terms.length &&
          <ul>
              {info.terms.includes("termsOfService") ? <li>User has agreed to the terms of service.</li> : <li>User has NOT agreed to the terms of service!</li>}
              {info.terms.includes("ofAge") ? <li>User is a legal adult.</li> : <li>User is a minor!</li>}
              {info.terms.includes("usCitizen") ? <li>User is a US Citizen.</li> : <li>User is not a US citizen.</li>}
          </ul>
      }
        </div>
    )
}