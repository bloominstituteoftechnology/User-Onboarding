import React from 'react'

function Friend({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friend-container'>
      <h2>{details.username ? details.username : details.first_name}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default Friend