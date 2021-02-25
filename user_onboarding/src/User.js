import React from 'react'

export default function User({ details }) {
  if (!details) {
    return <h3>No data returned...</h3>
  }

  return (
    <div className='friend container'>
      <h4>{!!details.first_name ?`${details.first_name} ${details.last_name} ` : `${details.username}`}</h4>
      <pre>Email: {details.email}</pre>
      {
        !!details.password && !!details.password.length &&
        <div>
          <pre>Password: yes</pre>
           {details.tos.map((item, i) => <pre key={i}>TOS: accepted</pre>)}
        </div>
      }
    </div>
  )
}

