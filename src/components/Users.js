import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.password}</p>
      <p>Term Of Service: {details.termofService}</p>

    
    </div>
  )
}

export default User
