import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>First Name: {details.role}</p>
      <p>Last Name: {details.civil}</p>
    </div>
  )
}

export default User