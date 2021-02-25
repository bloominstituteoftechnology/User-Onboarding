import React from 'react'

export default function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h4>{`${details.first_name} ${details.last_name}`}</h4>
      <pre>Email: {details.email}</pre>
      {
        !!details.password && !!details.password.length ?
        <div>
          <pre>Password: {details.password}</pre>
          <pre>TOS: {details.tos}</pre>
        </div>
        : <br/>
      }
    </div>
  )
}

