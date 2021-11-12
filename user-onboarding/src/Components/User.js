import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h2>{details.first_name}</h2>
      <h2>{details.last_name}</h2>
      <p>email: {details.email}</p>
      <p>password: {details.password}</p>
      <p>ToS: Agreed </p>
    </div>
  )
}

export default User